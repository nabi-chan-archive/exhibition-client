import {NextApiRequest, NextApiResponse} from "next";
import {decodeToken} from "@lib/jsonwebtoken";
import {AccessToken} from "@constants/types";
import aws from "aws-sdk";
import multer from "multer";

function initMiddleware(middleware: any) {
  return (req: NextApiRequest, res: NextApiResponse) =>
      new Promise((resolve, reject) => {
        middleware(req, res, (result) => {
          if (result instanceof Error) {
            return reject(result);
          }
          return resolve(result);
        });
      });
}

export const config = {
  api: {
    bodyParser: false,
  },
}

interface Request extends NextApiRequest {
  files: Files[];
}

interface Files extends Blob {
  buffer: Buffer;
  originalname: string;
  mimetype: string;
}

const uploadImage = async (req: Request, res: NextApiResponse) => {
  try {
    const {accesstoken} = req.headers;
    // 로그인을 하지 않은 경우 => 401
    if (!accesstoken) {
      res.status(401).end("");
      return;
    }

    const decoded = await decodeToken<AccessToken>(accesstoken);

    // 유저가 어드민이 아닌 경우 => 403
    if (!decoded.is_admin) {
      return res.status(403).end("Forbidden");
    }
  
    const upload = multer();
    const image = initMiddleware(upload.any());
    
    await image(req, res);
    
    const blob = req.files[0]
    
    const {S3_ACCESS_KEY, S3_SECRET_KEY, AWS_REGION, BUCKET_NAME, BUCKET_URL, CLOUDFRONT_URL} = process.env;
    
    const s3 = new aws.S3({
      accessKeyId: S3_ACCESS_KEY,
      secretAccessKey: S3_SECRET_KEY,
      region: AWS_REGION,
    });

    const [name, type] = blob.originalname.split('.')

    // 이미지 업로드
    const file = await s3.upload({
      Bucket: BUCKET_NAME,
      Key: `${new Date().getTime()}_${name}.${type}`,
      Body: blob.buffer,
      ContentType: blob.mimetype,
      ACL: 'public-read',
    }).promise();

    const path = file.Location.replace(BUCKET_URL, CLOUDFRONT_URL);
    
    res.status(201).end(path);
  }
  catch (e) {
    res.status(500).end(e.toString());
  }
};

export default uploadImage;

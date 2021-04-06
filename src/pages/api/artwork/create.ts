import {NextApiHandler} from "next";
import {decodeToken} from "@lib/jsonwebtoken";
import {AccessToken} from "@constants/types";
import prisma from "@lib/prisma";

const createArtwork: NextApiHandler = async (req, res) => {
  try {
    const { accesstoken } = req.headers;
    const { body } = req;
    
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
    
    await prisma.artworks.create({
      data: body
    });
    
    res.status(201).end("created");
  } catch (e) {
    res.status(500).end(e.toString());
  }
}

export default createArtwork;

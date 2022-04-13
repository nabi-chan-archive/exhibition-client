import {NextApiHandler} from "next";
// import {sha512} from "js-sha512";
// import prisma from "@lib/prisma";
// import {generateToken} from "@lib/jsonwebtoken";

const Login: NextApiHandler = async (req, res) => {
  try {
    if (req.method !== "POST") {
      res.status(405).end();
    }
    
    // const {email, password} = req.body;
    //
    // const user = await prisma.user.findFirst({
    //   where: {
    //     email,
    //     password: sha512(password),
    //   },
    //   select: {
    //     user_id: true,
    //     email: true,
    //     name: true,
    //     is_admin: true,
    //   },
    // });
    //
    // if (!user) {
    //   res.status(403).end("Forbidden");
    // }
    //
    // const accessToken = await generateToken(
    //     user,
    //     {
    //       expiresIn: "12h",
    //     },
    // );
    
    res.status(400).end();
  }
  catch (e) {
    console.error(e);
    res.status(500).end(e.toString());
  }
};

export default Login;

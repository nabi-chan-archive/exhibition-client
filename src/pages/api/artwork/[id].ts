import { AccessToken } from "@constants/types";
import { decodeToken } from "@lib/jsonwebtoken";
import prisma from "@lib/prisma";
import {NextApiHandler} from "next";

const handleArtwork: NextApiHandler = async (req, res) => {
  try {
    switch (req.method) {
      case "GET":
        return getArtwork(req, res);
      case "DELETE":
        return deleteArtwork(req, res);
      case "PUT":
        return putArtwork(req, res);
      default:
        return res.status(405).end(`method ${req.method} is not allowed`)
    }
  } catch (e) {
    res.status(500).end(e.toString());
  }
}

const getArtwork: NextApiHandler = async ({ query }, res) => {
  try {
    const result = await prisma.artworks.findUnique({
      where: {
        post_id: Number(query.id)
      }
    });
    
    if (!result) {
      res.status(404).end("Not Found");
    }
    
    res.status(200).json(result);
  } catch (e) {
    res.status(500).end(e.toString());
  }
}

const deleteArtwork: NextApiHandler = async (req, res) => {
  try {
    const { accesstoken } = req.headers;
    const { id } = req.query;
  
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
    
    await prisma.artworks.delete({
      where: {
        post_id: Number(id)
      }
    })
    
    res.status(200).end("success");
  } catch (e) {
    res.status(500).end(e.toString());
  }
}

const putArtwork: NextApiHandler = async (req, res) => {
  try {
    const { accesstoken } = req.headers;
    const { id } = req.query;
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
    
    await prisma.artworks.update({
      where: {
        post_id: Number(id)
      },
      data: body
    });
    
    res.status(200).end("success");
  } catch (e) {
    res.status(500).end(e.toString());
  }
}

export default handleArtwork;

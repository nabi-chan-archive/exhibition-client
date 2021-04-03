import prisma from "@lib/prisma";
import {NextApiHandler} from "next";

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

export default getArtwork;

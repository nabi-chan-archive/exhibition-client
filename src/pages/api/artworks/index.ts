import prisma from "@lib/prisma";
import {NextApiHandler} from "next";

const getArtworks: NextApiHandler = async (req, res) => {
  try {
    const result = await prisma.artworks.findMany();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).end(e.toString());
  }
}

export default getArtworks;

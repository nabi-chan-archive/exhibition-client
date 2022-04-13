// import prisma from "@lib/prisma";
import {NextApiHandler} from "next";
import data from "@constants/data.json";

const getArtworks: NextApiHandler = async (req, res) => {
  try {
    // const result = await prisma.artworks.findMany();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).end(e.toString());
  }
}

export default getArtworks;

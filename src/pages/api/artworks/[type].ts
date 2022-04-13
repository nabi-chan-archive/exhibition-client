// import prisma from "@lib/prisma";
import {NextApiHandler} from "next";
import data from "@constants/data.json";

const getArtworksByType: NextApiHandler = async ({ query }, res) => {
  try {
    const { type } = query;
    if (!["photography", "poster"].find((elem) => elem === type)) {
      res.status(400).end("Bad Request");
    }
    
    // const result = await prisma.artworks.findMany({
    //   where: {
    //     type: (type as string)
    //   }
    // });
    
    const result = data.filter((item) => item.type === type as string);
    
    res.status(200).json(result);
  } catch (e) {
    res.status(500).end(e.toString());
  }
}

export default getArtworksByType;

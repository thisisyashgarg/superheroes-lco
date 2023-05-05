import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../../db/dbConnect";
import Hero from "../../../../models/superhero";

dbConnect();
//get all records, post a new record

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        console.log("get all records");
        const heroes = await Hero.find({});
        res.status(200).send({ data: heroes });
      } catch (error: any) {
        res.status(400).send({ error: error.message });
      }
      break;

    case "POST":
      try {
        const hero = await Hero.create({});
        res.status(200).send({ data: hero });
      } catch (error: any) {
        res.status(400).send({ error: error.message });
      }
      break;

    default:
      res.status(400).send({ error: "Method not allowed" });
      break;
  }
}

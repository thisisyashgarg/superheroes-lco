import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../../db/dbConnect";
import Hero from "../../../../models/superhero";

dbConnect();
// get a record, edit, delete

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const hero = await Hero.findById(id);
        if (hero) {
          res.status(200).send({ data: hero });
        } else {
          res.status(404).send({ error: "Hero not found" });
        }
      } catch (error: any) {
        res.status(400).send({ error: error.message });
      }
      break;

    case "PUT":
      try {
        const hero = await Hero.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (hero) {
          res.status(200).send({ data: hero });
        } else {
          res.status(404).send({ error: "Hero not found" });
        }
      } catch (error: any) {
        res.status(400).send({ error: error.message });
      }
      break;

    case "DELETE":
      try {
        const hero = await Hero.findByIdAndDelete({ _id: id });
        if (hero) {
          res.status(200).send({ data: hero });
        } else {
          res.status(404).send({ error: "Hero not found" });
        }
      } catch (error: any) {
        res.status(400).send({ error: error.message });
      }
      break;

    default:
      res.status(400).send({ error: "Method not allowed" });
      break;
  }
}

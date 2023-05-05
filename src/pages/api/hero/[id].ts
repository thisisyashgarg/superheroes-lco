import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../../db/dbConnect";
import Hero from "../../../../models/superhero";

dbConnect();

// Get a record, edit, delete from specific id
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
          res.status(200).json({ data: hero });
        } else {
          res.status(404).json({ error: "Hero not found" });
        }
      } catch (error: any) {
        res.status(400).json({ error: error.message });
      }
      break;

    case "PUT":
      try {
        const hero = await Hero.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (hero) {
          res.status(200).json({ data: hero });
        } else {
          res.status(404).json({ error: "Hero not found" });
        }
      } catch (error: any) {
        res.status(400).json({ error: error.message });
      }
      break;

    case "DELETE":
      try {
        const hero = await Hero.findByIdAndDelete({ _id: id });
        if (hero) {
          res.status(200).json({ data: hero });
        } else {
          res.status(404).json({ error: "Hero not found" });
        }
      } catch (error: any) {
        res.status(400).json({ error: error.message });
      }
      break;

    default:
      res.status(400).json({ error: "Method not allowed" });
      break;
  }
}

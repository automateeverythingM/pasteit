import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const client = new PrismaClient();

export default async function getByIdHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  if (method === "GET") {
    const id = req.query.id as string;
    const text = await client.text.findFirst({ where: { id: id } });
    if (text) {
      return res.json(text);
    } else return res.status(404).json({ message: `text not found.` });
  }

  return res.status(400).json({ message: "not supported request method" });
}

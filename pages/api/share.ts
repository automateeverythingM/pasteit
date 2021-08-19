import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();
export default async function shareHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  if (method === "POST") {
    const { body } = req;
    const text = await client.text.create({ data: { text: body?.text } });
    res.status(201).send({ id: text.id });
  }

  res.status(404).end();
}

import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();
export default async function shareHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  console.log("in api share ");
  if (method === "POST") {
    try {
      const { body } = req;
      const text = await client.text.create({ data: { text: body?.text } });
      console.log("🚀 ~ file: share.ts ~ line 15 ~ text", text);
      return res.status(201).send({ id: text.id });
    } catch (error: any) {
      return res.status(404).json({ message: error.message });
    }
  }
}

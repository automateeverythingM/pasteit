import { NextApiRequest, NextApiResponse } from "next";
import { initFirebase } from "../../firebase/firebaseinit";
const firestore = initFirebase();

export default async function shareHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  if (method === "POST") {
    const { text } = req.body;
    const { id } = await firestore
      .collection("shared")
      .add({ text: text, created: new Date() });

    return res.status(201).json({ id });
  } else {
    return res.status(400).json({ message: "unsupported request method" });
  }
}

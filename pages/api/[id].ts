import { NextApiRequest, NextApiResponse } from "next";
import { initFirebase } from "../../firebase/firebaseinit";

const firestore = initFirebase();
export default async function getByIdHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  if (method === "GET") {
    const id = req.query.id as string;
    const fireText = await await firestore.collection("shared").doc(id).get();
    const text = fireText.data();
    if (text) {
      return res.json(text);
    } else return res.status(404).json({ message: `text not found.` });
  }

  return res.status(400).json({ message: "unsupported request method" });
}

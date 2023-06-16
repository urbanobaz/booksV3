import { NextApiRequest, NextApiResponse } from "next";
import { allBooks } from "@/models/Books";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // if (req.method === "POST") {
  // } else
  if (req.method === "GET") {
    const books = await allBooks;
    res.status(200).json(books);
  }
  res.status(404).json({ message: "Not Supported" });
}

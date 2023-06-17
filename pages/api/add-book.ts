import { NextApiRequest, NextApiResponse } from "next";
import { Book } from "@/models/Books";
import db from "@/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Book | { message: string }>
) {
  if (req.method === "POST") {
    const validatedBook = await Book.parseAsync(req.body);
    const insertBook = await db.collection("books").insertOne(validatedBook);
    res.status(200).json({
      ...validatedBook,
      _id: insertBook.insertedId,
    });
  }
  res.status(404).json({ message: "Not Supported" });
}

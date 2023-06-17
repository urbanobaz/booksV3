import { NextApiRequest, NextApiResponse } from "next";
import { Book, BookType } from "@/models/Book";
import db from "@/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BookType | { message: string }>
) {
  if (req.method === "POST") {
    const validatedBook = await Book.parseAsync(req.body);
    const insertBook = await db.collection("books").insertOne(validatedBook);
    return res.status(200).json({
      _id: insertBook.insertedId,
      ...req.body,
    });
  }
  res.status(404).json({ message: "Not Supported" });
}

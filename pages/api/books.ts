import { NextApiRequest, NextApiResponse } from "next";
import { Book, allBooks } from "@/models/Books";
import db from "@/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "POST": {
        const validatedBook = await Book.safeParseAsync(req.body);
        const insertBook = await db
          .collection("books")
          .insertOne(validatedBook);
        return res.status(200).json({
          _id: insertBook.insertedId,
          ...req.body,
        });
      }
      case "GET": {
        const books = await allBooks;
        return res.status(200).json(books);
      }
      default: {
        return res.status(404).json({ message: "Not Supported" });
      }
    }
  } catch (e) {
    const error = e as Error;
    return res.status(500).json({ message: error });
  }
}

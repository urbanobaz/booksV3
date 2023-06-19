import { Book } from "@/models/Book";
import db from "@/lib/mongo/client";
import { getAllBooks } from "@/lib/mongo/books";

export default async function handler(req, res) {
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
        const { books } = await getAllBooks();
        return res.status(200).json(books);
      }
      default: {
        return res.status(404).json({ message: "Not Supported" });
      }
    }
  } catch (e) {
    return res.status(500).json({ message: error });
  }
}

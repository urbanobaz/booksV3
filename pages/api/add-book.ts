import { NextApiRequest, NextApiResponse } from "next";
import { BookType } from "@/models/Book";
import { addBook } from "@/models/Book";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BookType | { message: string }>
) {
  if (req.method === "POST") {
    const bookDetails = {
      title: "Title",
      author: "Ray Dalio",
      pages: 300,
      published: new Date(),
    };
    const email = "urbanobaz@yahoo.com";
    const insertBook = await addBook(bookDetails, email);
    return res.status(200).json({
      ...req.body,
    });
  }
  res.status(404).json({ message: "Not Supported" });
}

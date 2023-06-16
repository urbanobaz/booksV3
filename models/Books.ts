import db from "@/db";
import { z } from "zod";

export const Book = z.object({
  _id: z.string().min(10),
  title: z.string(),
  author: z.string(),
  pages: z.number(),
  published: z.date(),
  read: z.boolean(),
  user: z.string().min(3),
});

export type Book = z.infer<typeof Book>;

export const allBooks = db.collection("books").find({}).limit(10).toArray();

export const booksByUser = (userEmail: string) =>
  db
    .collection("books")
    .find({ user: { $eq: userEmail } })
    .limit(10)
    .toArray();

// export const addBook = (book: Book, userEmail: string) => db.collect

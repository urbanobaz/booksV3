import db from "@/db";
import { ObjectId, WithId } from "mongodb";
import { z } from "zod";

export const Book = z.object({
  _id: z.instanceof(ObjectId),
  title: z.string(),
  author: z.string(),
  pages: z.number(),
  published: z.date(),
  read: z.boolean(),
  user: z.string().min(3),
});

export type Book = z.infer<typeof Book>;
export type BookWithId = WithId<Book>;

export const allBooks = db.collection("books").find({}).toArray();

export const booksByUser = (userEmail: string) =>
  db
    .collection("books")
    .find({ user: { $eq: userEmail } })
    .toArray();

// export const addBook = (book: Book, userEmail: string) => db.collect

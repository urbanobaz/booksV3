import db from "@/db";
import { WithId } from "mongodb";
import { z } from "zod";

export const Book = z.object({
  // _id: z.instanceof(ObjectId),
  title: z.string().min(1, "Title cannot be empty"),
  author: z.string(),
  pages: z.number().min(0),
  published: z.date(),
  read: z.boolean(),
  user: z.string().min(3),
});

export type BookType = z.infer<typeof Book>;
export type BookWithId = WithId<BookType>;

export const addBook = (book: BookType, userEmail: string) =>
  db.collection("books").insertOne({
    ...book,
    userEmail,
  });

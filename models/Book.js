import clientPromise from "@/lib/mongo/client";
import { z } from "zod";

const db = await clientPromise();

export const Book = z.object({
  // _id: z.instanceof(ObjectId),
  title: z.string().min(1, "Title cannot be empty"),
  author: z.string(),
  pages: z.number().min(0),
  published: z.date(),
  read: z.boolean(),
  user: z.string().min(3),
});

export const addBook = (book, userEmail) =>
  db.collection("books").insertOne({
    ...book,
    userEmail,
  });

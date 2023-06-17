import db from "@/db";

export const allBooks = db.collection("books").find({}).toArray();

export const booksByUser = (userEmail: string) =>
  db
    .collection("books")
    .find({ user: { $eq: userEmail } })
    .toArray();

// export const addBook = (book: Book, userEmail: string) => db.collect

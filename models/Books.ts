import { getAllBooks } from "@/lib/mongo/books";

export const allBooks = getAllBooks();

// export const booksByUser = (userEmail: string) =>
//   db
//     .collection("books")
//     .find({ user: { $eq: userEmail } })
//     .toArray();

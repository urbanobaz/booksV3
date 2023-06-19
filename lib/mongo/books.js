import clientPromise from "./client";

let client;
let db;
let books;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db();
    books = await db.collection("books");
  } catch (error) {
    throw new Error("Failed to connect to the database");
  }
}

(async () => {
  await init();
})();

export async function getAllBooks() {
  try {
    if (!books) await init();

    const result = await books.find({}).toArray();
    return { books: result };
  } catch (error) {
    return { error: "Failed to fetch books!" };
  }
}

export async function addBookToList(
  title,
  author,
  pages,
  published,
  read,
  user
) {
  try {
    if (!books) await init();

    return await books.insertOne({
      title,
      author,
      pages,
      published,
      read,
      user,
    });
  } catch (error) {
    return { error: "Failed to add book to list!" };
  }
}

export async function getBooksByUser(email) {
  try {
    if (!books) await init();

    const results = await books.find({ user: { $eq: email } }).toArray();
    return { books: results };
  } catch (error) {
    return { error: "Failed to fetch books!" };
  }
}

export async function getGoogleAPIBookInfo(title) {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${title}`
  );
  if (res.ok) {
    return res.json();
  } else {
    return {};
  }
}

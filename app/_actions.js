/* eslint-disable react-hooks/rules-of-hooks */
"use server";

import { addBookToList } from "@/lib/mongo/books";
import { revalidatePath } from "next/cache";
import { getGoogleAPIBookInfo } from "@/lib/mongo/books";

export async function create(formData) {
  const booksData = await getGoogleAPIBookInfo(formData.get("title"));
  const bookDetails = booksData.items[0].volumeInfo;
  const title = bookDetails.title;
  const author = bookDetails.authors[0];
  const pages = bookDetails.pageCount;
  const published = new Date(bookDetails.publishedDate);
  const read = true;
  const userEmail = "urbanobaz@yahoo.com";
  await addBookToList(title, author, pages, published, read, userEmail);
  revalidatePath("/dashboard");
}

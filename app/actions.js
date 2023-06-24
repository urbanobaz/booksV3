/* eslint-disable react-hooks/rules-of-hooks */
"use server";

import {
  addBookToList,
  deleteBookFromDatabase,
  updateRead,
} from "@/lib/mongo/books";
import { revalidatePath } from "next/cache";
import { getGoogleAPIBookInfo } from "@/lib/mongo/books";

export async function create(formData, emailAddress) {
  const booksData = await getGoogleAPIBookInfo(formData.get("title"));
  const bookDetails = booksData.items[0].volumeInfo;
  const title = bookDetails.title;
  const author = bookDetails.authors[0];
  const pages = bookDetails.pageCount;
  const published = new Date(bookDetails.publishedDate);
  const read = formData.get("read") === "on" ? true : false;
  const user = emailAddress;
  await addBookToList(title, author, pages, published, read, user);
  revalidatePath("/dashboard");
}

export async function deleteAction(id) {
  await deleteBookFromDatabase(id);
}

export async function updateReadAction(id, readValue) {
  await updateRead(id, readValue);
}

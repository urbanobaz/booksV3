/* eslint-disable react-hooks/rules-of-hooks */
"use server";

import { addBookToList } from "@/lib/mongo/books";
import { revalidatePath } from "next/cache";

export async function create(formData) {
  const title = formData.get("title");
  const author = formData.get("author");
  const pages = formData.get("pages");
  const published = formData.get("published");
  const read = true;
  const userEmail = "urbanobaz@yahoo.com";
  await addBookToList(title, author, pages, published, read, userEmail);
  revalidatePath("/dashboard");
}

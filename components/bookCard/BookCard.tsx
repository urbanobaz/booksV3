"use client";

import React from "react";
import styles from "./BookCard.module.css";
import { deleteAction, updateReadAction } from "@/app/actions";
import { useRouter } from "next/navigation";
import { cn } from "@/app/helpers/utils";
import { revalidatePath } from "next/cache";

type BookCardProps = {
  title: string;
  author: string;
  pages: number;
  publishedDate: Date;
  id: string;
  read: boolean;
};

export const dynamic = "force-dynamic";

const BookCard: React.FC<BookCardProps> = ({
  title,
  author,
  pages,
  read,
  id,
}) => {
  const router = useRouter();
  async function deleteItem(id: string) {
    await deleteAction(id);
    router.refresh();
  }
  async function updateReadValue(id: string, readValue: boolean) {
    await updateReadAction(id, readValue);
    router.refresh();
  }
  return (
    <div className={cn(styles.cardContainer, "h-full")}>
      <div className={cn(styles.cardContents, "h-full")}>
        <h3>{title}</h3>
        <p>by {author}</p>
        <p>Pages: {pages}</p>
        <div className={styles.row}>
          <p>Read:</p>
          <div className={styles.checkboxWrapper}>
            <input
              type="checkbox"
              checked={read}
              onChange={() => updateReadValue(id, !read)}
            />
          </div>
        </div>
        <div className="w-full h-1/4 flex flex-col justify-end">
          <button
            className={styles.button}
            type="button"
            onClick={() => deleteItem(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

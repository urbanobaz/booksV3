"use client";

import React from "react";
import styles from "./BookCard.module.css";
import { deleteAction, updateReadAction } from "@/app/actions";
import { useRouter } from "next/navigation";

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
    router.push("/dashboard");
  }
  async function updateReadValue(id: string, readValue: boolean) {
    await updateReadAction(id, readValue);
    router.refresh();
  }
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContents}>
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
        <button
          className={styles.button}
          type="button"
          onClick={() => deleteItem(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookCard;

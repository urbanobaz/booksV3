"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./BookCard.module.css";

type BookCardProps = {
  title: string;
  author: string;
  pages: number;
  publishedDate: string;
  id: string;
  read: boolean;
};

const BookCard: React.FC<BookCardProps> = ({ title, author, pages, read }) => {
  return (
    <Link href="/">
      <div className={styles.card}>
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
                onChange={() => console.log("Changed")}
              />
            </div>
          </div>
          <button className={styles.button} type="button">
            Delete
          </button>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;

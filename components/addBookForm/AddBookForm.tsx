"use client";
import { useState } from "react";
import styles from "./AddBookForm.module.css";
import { cn } from "@/app/helpers/utils";

export default function AddBookForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  return (
    <form className="container max-w-3xl mx-auto w-full flex flex-col">
      <h1 className={cn(styles.title, "mt-4")}>Add a book</h1>
      <div className={styles.row}>
        <div className={styles.labelWrapper}>
          <label htmlFor="title" className={cn(styles.label, "")}>
            Title
          </label>
        </div>
        <input
          value={title}
          id="title"
          type="text"
          className="input input-bordered input-primary w-full max-w-sm md:max-w-lg"
          onChange={(e) => {
            setTitle(e.currentTarget.value);
          }}
        />
      </div>
      <div className={styles.row}>
        <div className={styles.labelWrapper}>
          <label htmlFor="author" className={cn(styles.label, "")}>
            Author
          </label>
        </div>
        <input
          value={author}
          id="author"
          type="text"
          className="input input-bordered input-primary w-full max-w-sm md:max-w-lg"
          onChange={(e) => {
            setAuthor(e.currentTarget.value);
          }}
        />
      </div>
      <div className={styles.row}>
        <div className={styles.labelWrapper}>
          <label htmlFor="pages" className={cn(styles.label, "")}>
            Pages
          </label>
        </div>
        <input
          id="pages"
          type="number"
          className="input input-bordered input-primary w-full max-w-sm md:max-w-lg"
        />
      </div>
      <div className={styles.row}>
        <div className={styles.labelWrapper}>
          <label htmlFor="published" className={cn(styles.label, "")}>
            Published
          </label>
        </div>
        <input
          id="published"
          type="date"
          className="input input-bordered input-primary w-full max-w-sm md:max-w-lg"
        />
      </div>
      {/* <input value="+" type="submit" className={styles.addBookButton} /> */}
      <button className="btn btn-secondary">Add</button>
    </form>
  );
}

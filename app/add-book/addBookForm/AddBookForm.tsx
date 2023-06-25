"use client";

import { useState } from "react";
import styles from "./AddBookForm.module.css";
import { cn } from "@/app/helpers/utils";
import { create } from "@/app/actions";
import { useRouter } from "next/navigation";

type AddBookProps = {
  email: string;
};

export default function AddBookForm(props: AddBookProps) {
  const router = useRouter();
  const [readValue, setReadValue] = useState(false);

  return (
    <div
      className={cn(styles.formWrapper, "flex flex-row justify-center w-full")}
    >
      <form
        className={styles.form}
        action={(formData) => {
          create(formData, props.email);
          router.push("/dashboard");
        }}
      >
        <h1 className={cn(styles.title, "mt-4")}>Add a book</h1>
        <div className={styles.row}>
          <div className={styles.labelWrapper}>
            <label className={cn(styles.label, "")}>Title</label>
          </div>
          <input
            name="title"
            type="text"
            className={`input input-bordered input-primary w-full max-w-sm md:max-w-lg h-10`}
          />
        </div>
        <div className={styles.row}>
          <div className={styles.labelWrapper}>
            <label className={cn(styles.label, "")}>Author</label>
          </div>
          <input
            name="author"
            type="text"
            className="input input-bordered input-primary w-full max-w-sm md:max-w-lg h-10"
          />
        </div>
        <div className={styles.row}>
          <div className={styles.labelWrapper}>
            <label className={cn(styles.label, "")}>Read</label>
          </div>
          <input
            name="read"
            type="checkbox"
            checked={readValue}
            className="checkbox checkbox-accent"
            onChange={() => setReadValue(!readValue)}
          />
        </div>
        <button
          type="submit"
          className={cn(styles.addBookButton, "btn btn-secondary h-4")}
        >
          Add
        </button>
      </form>
    </div>
  );
}

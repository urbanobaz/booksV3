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
    <form
      className="container max-w-3xl mx-auto w-full flex flex-col"
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
          className={`input input-bordered input-primary w-full max-w-sm md:max-w-lg`}
        />
      </div>
      <div className={styles.row}>
        <div className={styles.labelWrapper}>
          <label className={cn(styles.label, "")}>Author</label>
        </div>
        <input
          name="author"
          type="text"
          className="input input-bordered input-primary w-full max-w-sm md:max-w-lg"
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
      <button type="submit" className="btn btn-secondary">
        Add
      </button>
    </form>
  );
}

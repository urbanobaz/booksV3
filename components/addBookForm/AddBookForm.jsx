"use client";

import { useRef } from "react";
import styles from "./AddBookForm.module.css";
import { cn } from "@/app/helpers/utils";
import { create } from "../../app/_actions";
import { useRouter } from "next/navigation";

export default function AddBookForm() {
  const formRef = useRef();
  const router = useRouter();

  async function action(formData) {
    await create(formData);
    formRef.current?.reset();
    router.push("/dashboard");
  }
  return (
    <form
      className="container max-w-3xl mx-auto w-full flex flex-col"
      action={action}
    >
      {[]}
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
          <label className={cn(styles.label, "")}>Pages</label>
        </div>
        <input
          name="pages"
          type="number"
          step="any"
          className="input input-bordered input-primary w-full max-w-sm md:max-w-lg"
        />
      </div>
      <div className={styles.row}>
        <div className={styles.labelWrapper}>
          <label className={cn(styles.label, "")}>Published</label>
        </div>
        <input
          name="published"
          type="date"
          className="input input-bordered input-primary w-full max-w-sm md:max-w-lg"
        />
      </div>
      <button type="submit" className="btn btn-secondary">
        Add
      </button>
    </form>
  );
}

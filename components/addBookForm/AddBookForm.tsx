"use client";

import styles from "./AddBookForm.module.css";
import { cn } from "@/app/helpers/utils";
import { SubmitHandler, useForm } from "react-hook-form";
import { Book, BookType } from "@/models/Book";
import { zodResolver } from "@hookform/resolvers/zod";

export default function AddBookForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(Book),
  });
  const onSubmit = async (data: any) => {
    const response = await fetch("/api/add-book", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    console.log(json);
  };
  return (
    <form
      className="container max-w-3xl mx-auto w-full flex flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      {[]}
      <h1 className={cn(styles.title, "mt-4")}>Add a book</h1>
      <div className={styles.row}>
        <div className={styles.labelWrapper}>
          <label className={cn(styles.label, "")}>Title</label>
        </div>
        <input
          type="text"
          className={`input input-bordered input-primary w-full max-w-sm ${
            !!errors.title && "input-error"
          } md:max-w-lg`}
          {...register("title")}
        />
        {/* {errors.title && <span>{errors.title.message && errors.title.message}</span>} */}
      </div>
      <div className={styles.row}>
        <div className={styles.labelWrapper}>
          <label className={cn(styles.label, "")}>Author</label>
        </div>
        <input
          type="text"
          className="input input-bordered input-primary w-full max-w-sm md:max-w-lg"
          {...register("author")}
        />
      </div>
      <div className={styles.row}>
        <div className={styles.labelWrapper}>
          <label className={cn(styles.label, "")}>Pages</label>
        </div>
        <input
          type="number"
          step="any"
          className="input input-bordered input-primary w-full max-w-sm md:max-w-lg"
          {...register("pages")}
        />
      </div>
      <div className={styles.row}>
        <div className={styles.labelWrapper}>
          <label className={cn(styles.label, "")}>Published</label>
        </div>
        <input
          type="date"
          className="input input-bordered input-primary w-full max-w-sm md:max-w-lg"
          {...register("published")}
        />
      </div>
      <button className="btn btn-secondary">Add</button>
    </form>
  );
}

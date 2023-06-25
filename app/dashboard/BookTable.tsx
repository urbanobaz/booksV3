import React from "react";
import { Book } from "./page";
import { DataTable } from "./data-table";
import { columns } from "./columns";

type BookTableProps = {
  books: Book[];
};

export default function BookTable({ books }: BookTableProps) {
  const data = books.map((book: Book) => {
    return {
      ...book,
      _id: book._id.toString(),
    };
  });
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={books} />
    </div>
  );
}

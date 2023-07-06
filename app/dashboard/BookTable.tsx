import React from "react";
import { Book } from "./page";
import { DataTable } from "./data-table";
import { columns } from "./columns";

type BookTableProps = {
  books: Book[];
};

export default function BookTable({ books }: BookTableProps) {
  return (
    <div className="w-full mx-auto py-10">
      <DataTable columns={columns} data={books} />
    </div>
  );
}

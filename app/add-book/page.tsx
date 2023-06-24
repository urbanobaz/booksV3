"use server";

import AddBookForm from "@/components/addBookForm/AddBookForm";
import { currentUser } from "@clerk/nextjs";
import React from "react";
import { cn } from "@/app/helpers/utils";

export default async function AddBookPage() {
  const user = await currentUser();
  return (
    <div className={cn("h-full flex justify-center")}>
      <AddBookForm
        email={
          user?.emailAddresses[0].emailAddress
            ? user?.emailAddresses[0].emailAddress
            : ""
        }
      />
    </div>
  );
}

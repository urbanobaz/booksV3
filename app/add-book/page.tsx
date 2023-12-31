"use server";

import AddBookForm from "./addBookForm/AddBookForm";
import { currentUser } from "@clerk/nextjs";
import React from "react";

export default async function AddBookPage() {
  const user = await currentUser();
  return (
    <AddBookForm
      email={
        user?.emailAddresses[0].emailAddress
          ? user?.emailAddresses[0].emailAddress
          : ""
      }
    />
  );
}

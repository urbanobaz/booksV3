import BookCard from "@/components/bookCard/BookCard";
import { getBooksByUser } from "@/lib/mongo/books";
import { currentUser } from "@clerk/nextjs";
import { ObjectId } from "mongodb";

export const dynamic = "force-dynamic";

export interface Book {
  _id: ObjectId;
  title: string;
  author: string;
  pages: number;
  published: Date;
  read: boolean;
}

export default async function Home() {
  const user = await currentUser();
  const { books } = await getBooksByUser(
    user?.emailAddresses[0].emailAddress
      ? user?.emailAddresses[0].emailAddress
      : ""
  );
  let numberOfPages = 0;
  books.map((book: Book) => {
    if (book.read) {
      numberOfPages += book.pages;
    }
  });

  return (
    <div className="max-w-7xl mx-auto w-full pt-4">
      <p>{`${user?.emailAddresses[0].emailAddress} has ${books.length} in their book list.`}</p>
      <p className="pt-4">{`Pages read: ${numberOfPages}`}</p>
      <div className="flex flex-wrap">
        {books &&
          books.map((book: Book) => (
            <BookCard
              key={book._id.toString()}
              title={book.title}
              author={book.author}
              pages={book.pages}
              publishedDate={book.published}
              id={book._id.toString()}
              read={book.read}
            />
          ))}
      </div>
    </div>
  );
}

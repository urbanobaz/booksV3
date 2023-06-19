import BookCard from "@/components/bookCard/BookCard";
import { getBooksByUser } from "@/lib/mongo/books";
import { currentUser } from "@clerk/nextjs";
import { ObjectId } from "mongodb";

export const dynamic = "force-dynamic";

export default async function Home() {
  const user = await currentUser();
  const { books } = await getBooksByUser(
    user?.emailAddresses[0].emailAddress
      ? user?.emailAddresses[0].emailAddress
      : ""
  );

  return (
    <div className="w-full">
      <h2></h2>
      <p>{`${user?.emailAddresses[0].emailAddress} has ${books.length} in their book list.`}</p>
      <div className="flex">
        {books &&
          books.map(
            (book: {
              _id: ObjectId;
              title: string;
              author: string;
              pages: number;
              published: Date;
              read: boolean;
            }) => (
              <BookCard
                key={book._id.toString()}
                title={book.title}
                author={book.author}
                pages={book.pages}
                publishedDate={book.published}
                id={book._id.toString()}
                read={book.read}
              />
            )
          )}
      </div>
    </div>
  );
}

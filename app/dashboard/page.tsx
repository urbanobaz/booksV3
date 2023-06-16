import BookCard from "@/components/bookCard/BookCard";
import { booksByUser } from "@/models/Books";
import { currentUser } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();
  const books = await booksByUser(
    user?.emailAddresses[0].emailAddress
      ? user?.emailAddresses[0].emailAddress
      : ""
  );
  //   console.log(user);

  return (
    <div className="w-full">
      <h2></h2>
      <p>{`${user?.emailAddresses[0].emailAddress} has ${books.length} in their book list.`}</p>
      <div className="flex">
        {books.map((book) => (
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

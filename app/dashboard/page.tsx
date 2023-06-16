import { booksByUser } from "@/models/Books";
import { currentUser } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();
  const books = await booksByUser("ubazdevelops@gmail.com");
  //   console.log(user);

  return (
    <div className="w-full">
      <h2></h2>
      <p>{`${user?.emailAddresses[0].emailAddress} has ${books.length} in their book list.`}</p>
      {books.map((book) => (
        <div key={book._id.toString()}>
          <p>{book.title}</p>
        </div>
      ))}
    </div>
  );
}

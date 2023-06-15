import { Books } from "@/models/Books";

export default async function Home() {
  const books = await Books;
  console.log(books);

  return (
    <div>
      <p>Home</p>
      {/* {books.map((book) => {
          <p>{book.title}</p>;
        })} */}
    </div>
  );
}

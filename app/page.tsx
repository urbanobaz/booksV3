import Image from "next/image";

export default function Home() {
  return (
    <div className="container max-w-7xl mx-auto my-auto w-full h-full flex flex-col justify-center">
      <h1 className="main-home-text">
        Sign up or sign in to add books to your list!
      </h1>
      <div className="wrapper">
        <Image
          src="/shots-books.png"
          alt="Books showcase image"
          className="main-image"
          width="1000"
          height="1000"
        />
      </div>
      <div className="wrapper-mini">
        <Image
          src="/shots-books-mini.png"
          alt="Books mini showcase image"
          className="main-image"
          width="500"
          height="500"
        />
      </div>
    </div>
  );
}

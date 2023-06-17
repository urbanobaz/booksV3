import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = async () => {
  return (
    <div className="fixed backdrop-blur-sm z-50 top-0 left-0 right-0 h-16 border-b border-slate-600 shadow-sm flex items-center justify-between">
      <div className="container max-w-7xl mx-auto w-full flex justify-between items-center">
        <Link className="text-primary text-xl" href="/">
          Books & More
        </Link>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </div>
  );
};

export default Navbar;

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { cn } from "@/app/helpers/utils";

const Navbar = async () => {
  return (
    <div className="fixed backdrop-blur-sm z-50 top-0 left-0 right-0 h-16 border-b border-slate-600 shadow-sm flex items-center justify-between">
      <div
        className={cn(
          styles.navbar,
          "container max-w-7xl mx-auto py-4 w-full flex justify-between items-center"
        )}
      >
        <SignedIn>
          <Link className="text-primary text-xl" href="/dashboard">
            Books & More
          </Link>
        </SignedIn>
        <SignedOut>
          <Link className="text-primary text-xl" href="/">
            Books & More
          </Link>
        </SignedOut>
        <SignedIn>
          <div className="flex">
            <div className="flex flex-col justify-center mr-4">
              <Link className="w-16 text-sm md:w-20 text-md" href="/add-book">
                Add book
              </Link>
            </div>
            <UserButton />
          </div>
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </div>
  );
};

export default Navbar;

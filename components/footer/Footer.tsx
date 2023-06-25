import Link from "next/link";
import styles from "./Footer.module.css";
import { cn } from "@/app/helpers/utils";

const Footer = async () => {
  const year = new Date().getFullYear();
  return (
    <div
      className={cn(
        styles.Footer,
        "container max-w-7xl mx-auto py-3 w-full flex justify-center"
      )}
    >
      <p className="flex justify-center">
        &copy; {year} Books & More. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;

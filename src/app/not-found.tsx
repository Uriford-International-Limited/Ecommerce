import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center gap-3 md:gap-5 px-10">
      <Image
        src="/error-page.svg"
        width={600}
        height={500}
        priority
        alt="Error page Image"
      />
      <h4 className="text-2xl sm:text-3xl md:text-4xl">Page not found</h4>
      <p className="text-xs sm:text-base text-center">
        The page you want to go is not currently available
      </p>

      <div className="flex gap-4">
        <Link href="/">
          <Button>Home page</Button>
        </Link>
        <Link href="/">
          <Button variant="secondary">Back</Button>
        </Link>
      </div>
    </section>
  );
}

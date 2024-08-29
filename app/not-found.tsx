import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid h-screen place-items-center">
      <div className="flex flex-col gap-4 items-center">
        <div className="flex flex-col items-center gap-2 justify-center text-center">
          <h2 className="text-[4rem] font-bold">404</h2>
          <p className="text-muted-foreground">Page not found</p>
        </div>

        <Link href="/" className={buttonVariants({})}>
          Back to homepage
        </Link>
      </div>
    </div>
  );
}

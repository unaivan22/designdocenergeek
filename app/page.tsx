import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { MoveUpRightIcon, TerminalIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
      <Link
        href="https://gitlab.com/energeek"
        target="_blank"
        className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4"
      >
        Repository on Gitlab{" "}
        <MoveUpRightIcon className="w-4 h-4 font-extrabold" />
      </Link>
      <h1 className="text-4xl font-bold mb-4 sm:text-5xl">
        Design Documentation Energeek
      </h1>
      <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
      This design documentation page is created as a basic reference in implementing the design into code at Energeek.
      </p>
      <div className="flex flex-row items-center gap-5">
        <Link
          href={`/docs/${page_routes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Get Stared
        </Link>
        {/* <Link
          href="#"
          className={buttonVariants({
            variant: "outline",
            className: "px-6",
            size: "lg",
          })}
        >
          Customize
        </Link> */}
      </div>
      <span className="flex flex-row items-center gap-2 text-zinc-400 text-md mt-7 -mb-12 max-[800px]:mb-12">
        <TerminalIcon className="w-4 h-4 mr-1" /> Mantainer by : <a href="https://gitlab.com/unaivan" className="hover:text-black underline">@ivan</a> @drajat
      </span>
    </div>
  );
}

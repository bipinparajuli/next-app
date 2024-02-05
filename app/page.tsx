import Link from "next/link";

import { examples } from "@/const/const";

export default function Home() {
  return (
    <main className="flex flex-col mt-10">
      <div className="flex ">
        {examples.map((example, index) => (
          <Link
            href={example.href}
            key={example.href}
            className={
              "flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary text-muted-foreground"
            }
          >
            {example.name}
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <h2>Welcome to Next App with Shadcn</h2>
      </div>
    </main>
  );
}

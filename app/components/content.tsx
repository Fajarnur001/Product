"use client";
import React from "react";
import { Badge, badgeVariants } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Content() {
  
  return (
    <div className={cn("m-auto", "w-1/2", "p-5", "flex flex-col items-center")}>
      <Badge className={cn("text-md", "mb-5")}>Versi: Beta</Badge>
      <p className={cn("text-6xl text-center font-bold", "mb-5")}>
        Welcome to the Todo List App
      </p>
      <p className={cn("text-lg text-slate-500 text-center", "px-5", "mb-5")}>
        Start organizing your tasks easily. Schedule, complete, and manage your
        tasks quickly and efficiently.
      </p>
      <div className="flex gap-5">
        <Link href="/">
          <Button>Github</Button>
        </Link>
        <Button variant={"outline"}>What is todo</Button>
      </div>
    </div>
  );
}

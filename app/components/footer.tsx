import React from "react";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <div
      className={cn(
        "h-20  w-full",
        "flex items-center justify-center",
        "border-t"
      )}
    >
      &copy; Copyright by fajarnur 2024
    </div>
  );
}

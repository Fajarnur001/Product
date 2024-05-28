"use client";
import { Button } from "@/components/ui/button";
import { MenuUser } from "./menu-user";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { signOut, useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import { ModeToggle } from "./mode-toggle";

export default function NavUser() {
  return (
    <div>
      <div
        className={cn(
          "flex justify-between items-center",
          "p-4 px-10",
          "border-b border-gray-200 boder-[1px]",
        )}
      >
        <Label className="font-semibold">Dashboard</Label>
        <div>
          <MenuUser />
        </div>
        <div className={cn("flex items-center gap-x-6")}>
          <div>
            <ModeToggle />
          </div>
                <Button>Sing out</Button>
          </div>
        </div>
      </div>
  );
}

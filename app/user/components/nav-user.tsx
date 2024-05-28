import { Button } from "@/components/ui/button";
import { MenuUser } from "./menu-user";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

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
        <p>
          <Button>Logout</Button>
        </p>
      </div>
    </div>
  );
}

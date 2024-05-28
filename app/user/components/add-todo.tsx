"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { onSubmitNewTodo } from "@/lib/addData";
import { useToast } from "@/components/ui/use-toast";
import { useTodoStore } from "@/stores/app-store";

export default function AddTodo() {
  const [newTodo, setNewTodo] = useState("");
  const { toast } = useToast();
  const addTodos = useTodoStore((state: any) => state.addTodos);
  const handlerGetValue = (e: any) => {
    setNewTodo(e.target.value);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button>Add Todo</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Todo List</DialogTitle>
          <DialogDescription>
             Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="todo" className="text-right">
            New Todo
          </Label>
          <Input
            id="username"
            value={newTodo}
            onChange={(e) => handlerGetValue(e)}
            className="col-span-3"
          />
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={() => onSubmitNewTodo(addTodos, newTodo, toast)}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

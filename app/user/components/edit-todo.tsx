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
import { useToast } from "@/components/ui/use-toast";
import { onEditNewTodo } from "@/lib/editTodo";
import { useTodoStore } from "@/stores/app-store";

export default function EditTodo({
  id,
  todoItem,
}: {
  id: number;
  todoItem: {
    todo: string;
  };
}) {
  const [newTodo, setNewTodo] = useState(todoItem.todo);
  const editTodos = useTodoStore((state: any) => state.editTodos);
  const { toast } = useToast();
  const handlerGetValue = (e: any) => {
    setNewTodo(e.target.value);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button>Edit</Button>
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
            onClick={() => onEditNewTodo(id, editTodos, newTodo, toast)}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

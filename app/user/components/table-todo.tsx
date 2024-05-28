"use client";
import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import AddTodo from "./add-todo";
import DeleteTodo from "./delete-todo";
import EditTodo from "./edit-todo";
import { handlerGetData } from "@/lib/getData";
import { onChangeCheck } from "@/lib/checkedTodo";
import { useTodoStore } from "@/stores/app-store";

export default function TableTodo() {
  const todos = useTodoStore((state: any) => state.todos);
  const increaseTodos = useTodoStore((state: any) => state.increaseTodos);
  const checkedTodos = useTodoStore((state: any) => state.checkedTodos);

  useEffect(() => {
    const getData = async () => {
      try {
        const todo = await handlerGetData();
        increaseTodos(todo);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  console.log(todos);

  if (todos === undefined) return <p>Loading...</p>;

  return (
    <div className="px-10 py-5">
      <div className=" mb-5">
        <AddTodo />
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No</TableHead>
            <TableHead>Todo List</TableHead>
            <TableHead>Completed</TableHead>
            <TableHead>Create_at</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        {todos.map(
          (
            todoItem: {
              id: number;
              created_at: any;
              todo: string;
              checked: boolean;
            },
            index: any,
          ) => (
            <TableBody key={todoItem.id}>
              <TableRow>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{todoItem.todo}</TableCell>
                <TableCell>
                  <Checkbox
                    checked={todoItem.checked}
                    onClick={() =>
                      onChangeCheck(todoItem.checked, todoItem.id, checkedTodos)
                    }
                  />
                </TableCell>
                <TableCell>{todoItem.created_at}</TableCell>
                <TableCell className="text-right">
                  <div className="flex gap-x-2 text-right">
                    <EditTodo id={todoItem.id} todoItem={todoItem} />
                    <DeleteTodo id={todoItem.id} />
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          ),
        )}
      </Table>
    </div>
  );
}

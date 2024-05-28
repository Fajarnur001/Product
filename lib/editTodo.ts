import { supabase } from "./supabase";

export const onEditNewTodo = async (
  todoId: number,
  deleteTodos: (id: number, newTodo: string) => void,
  newTodo: string,
  toast: any
) => {
  try {
    deleteTodos(todoId, newTodo);

    toast({
      title: "Success",
      description: "Friday, February 10, 2023 at 5:57 PM",
    });

    const { error } = await supabase
      .from("todo")
      .update({ todo: newTodo })
      .eq("id", todoId);
    if (error) {
      throw Error("Failed to update todo");
    }
  } catch (error) {
    console.error("Error adding new todo:", error);
  }
};

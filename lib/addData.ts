import { supabase } from "@/lib/supabase";

export const onSubmitNewTodo = async (
  addTodos: (prevTodos: any) => void,
  newTodo: string,
  toast: any
) => {
  try {
    const date = new Date();
    const create_at = date.toISOString().slice(0, 19).replace("T", " ");
    const id = date.getTime().toString();
    const newTodos = {
      id,
      created_at: create_at,
      todo: newTodo,
      checked: false,
    };
    addTodos(newTodos)

    toast({
      title: "Success",
      description: `Success to add todo`,
    });

    const { error } = await supabase
      .from("todo")
      .insert([
        { id: id, created_at: create_at, todo: newTodo, checked: false },
      ]);

    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    console.error("Error adding new todo:", error);
  }
};

import { supabase } from "./supabase";

export const handlerDeleteTodo = async (
  id: number,
  deleteTodos: (prevTodos: any) => void,
  toast: any
) => {
  try {
    deleteTodos(id);

    toast({
      title: "Success",
      description: `Success to delete todo`,
    });

    const { error } = await supabase.from("todo").delete().eq("id", id);
    if (error) {
      throw new Error("thers same error");
    }
  } catch (error) {
    console.log(error);
  }
};

import { supabase } from "./supabase";
export const onChangeCheck = async (
  check: boolean,
  id: number,
  checkedTodos: (id: any, check: boolean) => void
) => {
  try {
    checkedTodos(id, check);
    const { error } = await supabase
      .from("todo")
      .update({ checked: !check })
      .eq("id", id);
    if (error) {
      throw Error("Failed to update todo");
    }
  } catch (error) {
    console.log(error);
  }
};

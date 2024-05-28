import { supabase } from "./supabase";

export const handlerGetData = async () => {
  try {
    let { data: todo, error } = await supabase.from("todo").select("*");
    if (error) {
      throw Error("filed to get data");
    }
    return todo;
  } catch (error) {
    console.log(error);
  }
};

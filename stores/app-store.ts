import { create } from "zustand";

export const useTodoStore = create((set) => ({
  todos: [],
  increaseTodos: (data: any) => set(() => ({ todos: data })),
  addTodos: (newTodos: {
    id: number;
    created_at: any;
    todo: string;
    checked: boolean;
  }) => set((state: any) => ({ todos: [...state.todos, newTodos] })),
  deleteTodos: (id: number) =>
    set((state: any) => ({
      todos: state.todos.filter((todo: any) => todo.id !== id),
    })),
  editTodos: (id: number, newTodos: any) =>
    set((state: any) => ({
      todos: state.todos.map((todoItem: any) =>
        todoItem.id === id ? { ...todoItem, todo: newTodos } : todoItem,
      ),
    })),
  checkedTodos: (id: number, check: boolean) =>
    set((state: any) => ({
      todos: state.todos.map((todoItem: any) =>
        todoItem.id === id ? { ...todoItem, checked: !check } : todoItem,
      ),
    })),
}));

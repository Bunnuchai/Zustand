import { create } from 'zustand';

interface TodoState {
  tasks: string[];
  addTask: (task: string) => void;
  deleteTask: (index: number) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  tasks: [],
  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),
  deleteTask: (index) =>
    set((state) => ({
      tasks: state.tasks.filter((_, i) => i !== index),
    })),
}));
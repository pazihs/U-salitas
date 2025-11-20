import { create } from "zustand";
import type { UserData } from "./types/users";
import type { ClassroomData } from "./types/classrooms";


type ClassroomState = {
    user: UserData | null;
    classrooms: ClassroomData[];
    query: string;
    toast: { message: string, severity: 'success' | 'error' } | null;
    setUser: (user: UserData | null) => void;
    setClassrooms: (classrooms: ClassroomData[]) => void;
    setQuery: (query: string) => void;
    setToast: (toast: { message: string, severity: 'success' | 'error' } | null) => void;
    // tasks: TaskData[];
    // selectedTask: TaskData | null;
    // selectedCategory: String | null;
    // isModalOpen: boolean;
    // addTask: (task: TaskData) => void;
    // setCategory: (category: String) => void;
    // changeTaskState: (task: TaskData, state: State) => void;
    // openModal: (task: TaskData) => void;
    // closeModal: () => void;
};

export const useClassroomStore = create<ClassroomState>((set) => ({
    user: null,
    classrooms: [],
    query: '',
    toast: null,
    setUser: user => set({ user: user }),
    setClassrooms: classrooms => set({ classrooms: classrooms }),
    setQuery: query => set({ query: query }),
    setToast: toast => set({ toast: toast }),
    // tasks: [],
    // selectedTask: null,
    // selectedCategory: null,
    // isModalOpen: false,
    // addTask: task => set((state) => ({ tasks: state.tasks.concat(task) })),
    // setCategory: category => set({ selectedCategory: category }),
    // changeTaskState: (task, state) => { task.state = state },
    // openModal: task => set({ isModalOpen: true, selectedTask: task }),
    // closeModal: () => set({ isModalOpen: false, selectedTask: null }),
}));
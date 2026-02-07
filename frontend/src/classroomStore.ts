import { create } from "zustand";
import type { ClassroomData } from "./types/classrooms";


type ClassroomState = {
    classrooms: ClassroomData[];
    query: string;
    setClassrooms: (classrooms: ClassroomData[]) => void;
    setQuery: (query: string) => void;
};

export const useClassroomStore = create<ClassroomState>((set) => ({
    classrooms: [],
    query: '',
    setClassrooms: classrooms => set({ classrooms: classrooms }),
    setQuery: query => set({ query: query })
}));
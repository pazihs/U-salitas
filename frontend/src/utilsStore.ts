import { create } from "zustand";
import type { UserData } from "./types/users";


type UtilsState = {
    user: UserData | null;
    toast: { message: string, severity: 'success' | 'error' } | null;
    setUser: (user: UserData | null) => void;
    setToast: (toast: { message: string, severity: 'success' | 'error' } | null) => void;
};

export const useUtilsStore = create<UtilsState>((set) => ({
    user: null,
    toast: null,
    setUser: user => set({ user: user }),
    setToast: toast => set({ toast: toast })
}));
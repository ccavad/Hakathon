import { create } from "zustand";

export const useAuthStore = create((set) => ({
  token: null,
  setToken: (value) => set({ token: value }),
  initToken: () => {
    const notSafeAuthToken = JSON.parse(
      localStorage.getItem("notSafeAuthToken")
    );
    if (notSafeAuthToken) {
      set({ token: notSafeAuthToken });
    }
  },
}));
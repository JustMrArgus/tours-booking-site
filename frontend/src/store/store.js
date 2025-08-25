import { create } from "zustand";

const useStore = create((set) => ({
  isAuthenticated: false,
  changeAuthenticationStatus: (status) => {
    set(() => ({ isAuthenticated: status }));
  },
}));

export default useStore;

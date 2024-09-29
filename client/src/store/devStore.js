import { create } from "zustand";

const devStore = create((set) => ({

    isNavOpen: true,

    toggleNav: () => set(state => ({
        isNavOpen: !state.isNavOpen
    })),

}));

export default devStore;

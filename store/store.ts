// src/store/useStore.ts
import create from 'zustand';

interface State {
  isMenuBarOpen: boolean;
}

interface Actions {
  toggleMenuBar: () => void;
  closeMenuBar: () => void;
}

const useStore = create<State & Actions>((set) => ({
  isMenuBarOpen: false,
  toggleMenuBar: () => set((state) => ({ isMenuBarOpen: !state.isMenuBarOpen  })),
  closeMenuBar: () => set((state) => ({ isMenuBarOpen: false })),
}));

export default useStore;

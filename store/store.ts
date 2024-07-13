import create from 'zustand';

interface State {
  isMenuBarOpen: boolean;
  isViewNote: boolean,
  isSettings:boolean
}

interface Actions {
  toggleMenuBar: () => void;
  closeMenuBar: () => void;
  toggleViewNote:() => void;
  toggleSettings:()=> void
}

const useStore = create<State & Actions>((set) => ({
  isMenuBarOpen: false,
  isViewNote: false,
  isSettings:false,
  toggleMenuBar: () => set((state) => ({ isMenuBarOpen: !state.isMenuBarOpen  })),
  closeMenuBar: () => set((state) => ({ isMenuBarOpen: false })),
  toggleViewNote:  () => set((state) => ({ isViewNote: !state.isViewNote  })),
  toggleSettings: () => set((state) => ({ isSettings: !state.isSettings })),
}));

export default useStore;

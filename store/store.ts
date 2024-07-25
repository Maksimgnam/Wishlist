import create from 'zustand';

interface State {
  isMenuBarOpen: boolean;
  isViewNote: boolean,
  isSettings:boolean,
  isCreateWishlist:boolean,
  isWishesData:boolean
}

interface Actions {
  toggleMenuBar: () => void;
  closeMenuBar: () => void;
  toggleViewNote:() => void;
  toggleSettings:()=> void,
  toggleCreateWishlist: () => void
}

const useStore = create<State & Actions>((set) => ({
  isMenuBarOpen: false,
  isViewNote: false,
  isSettings:false,
  isCreateWishlist: false,
  isWishesData: false,
  toggleMenuBar: () => set((state) => ({ isMenuBarOpen: !state.isMenuBarOpen  })),
  closeMenuBar: () => set(() => ({ isMenuBarOpen: false })),
  toggleViewNote:  () => set((state) => ({ isViewNote: !state.isViewNote  })),
  toggleSettings: () => set((state) => ({ isSettings: !state.isSettings })),
  toggleCreateWishlist: () => set((state) => ({ isCreateWishlist: !state.isCreateWishlist })),
}));

export default useStore;

export interface GlobalState {
    isModalOpen: boolean;
    toggleModal: () => void;
    isMenuOpen: boolean;
    toggleMenu: () => void;
    exitMenu: () => void;
    exitModal: () => void;
  }
  
  export interface ServiceData {
    hl: string;
    desc: string;
    img: string;
  }
  export interface ITestState{
    children : any // eslint-disable-line @typescript-eslint/no-explicit-any
  }
  
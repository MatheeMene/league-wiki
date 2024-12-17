import { createContext } from 'react';
import UIStore from './definition/UIStore';

export class RootStore {
  UIStore = new UIStore();
}

const StoreList = new RootStore();
const StoreContext = createContext(StoreList);

export { StoreContext };

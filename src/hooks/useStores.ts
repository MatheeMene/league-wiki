import { useContext } from 'react';
import { StoreContext } from '../store/Store';

export const useStores = () => useContext(StoreContext);

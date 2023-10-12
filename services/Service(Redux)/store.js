import { configureStore } from '@reduxjs/toolkit';
import FirestoreStoreItem from './FirestoreStoreItem';
import FirestoreItems from './FirestoreItems';

export const store = configureStore({
    reducer: {
        db: FirestoreStoreItem,
        items: FirestoreItems
    }
}) 

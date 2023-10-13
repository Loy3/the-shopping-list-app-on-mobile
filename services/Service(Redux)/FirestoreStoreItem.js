import { createSlice } from '@reduxjs/toolkit'
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Config/Firebase";

export const FirestoreStoreItem = createSlice({
    name: "db",
    initialState: {
        itemName: "",
        itemQuantity: "",
        itemCategory: ""
    },
    reducers: {
        addNewItem: (state, action) => {
            try {
                const docRef = addDoc(collection(db, "items"), action.payload);
                // console.log(docRef);
            } catch (error) {
                alert(error)
            }
        }
    }
})

export const { addNewItem } = FirestoreStoreItem.actions;

export default FirestoreStoreItem.reducer;
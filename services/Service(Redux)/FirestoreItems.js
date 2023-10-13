import { createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, doc, deleteDoc, updateDoc,onSnapshot } from "firebase/firestore";
import { db } from "../Config/Firebase";

const initialState = {
    loading: false,
    error: null,
    items: []
}

const FirestoreItems = createSlice({
    name: "items",
    initialState,
    reducers: {
        fetchItemsStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchItemsSuccess(state, action) {
            state.loading = false;
            state.items = action.payload
        },

        fetchItemsFailure(state, action) {
            state.loading = null;
            state.error = action.payload;
        },
        deleteItem(state, action) {
            const index = state.items.findIndex((item) => item.id === action.payload)
            if (index !== -1) {
                state.items.splice(index, 1);
            }
        },
        updateMyItem(state, action) {
            const index = state.items.findIndex((item) => item.id === action.payload)
            if (index !== -1) {
                state.items.splice(index, 1);
            }
        }
    }
})

export const { fetchItemsStart, fetchItemsSuccess, fetchItemSuccess, fetchItemsFailure, deleteItem, updateMyItem } = FirestoreItems.actions;

export const fetchItems = () => async (dispatch) => {
    dispatch(fetchItemsStart())
    try {
        const collectionRef = collection(db, 'items');
        
        onSnapshot(collectionRef, (snapshot) => { 
            var fetchedDocuments = [];
            snapshot.forEach((doc) => {
              fetchedDocuments.push({ id: doc.id, ...doc.data() });
            });
            dispatch(fetchItemsSuccess(fetchedDocuments))
          });

        
        // console.log(documents);
    } catch (error) {
        dispatch(fetchItemsFailure(error))
    }

}

export const deleteAnItem = (id) => async (dispatch) => {
    try {
        await deleteDoc(doc(db, "items", id));
        alert("Deleted successfully!");
        // window.location.reload();
    } catch (error) {
        dispatch(fetchItemsFailure(error));
    }
}

export const updateAnItem = (id) => async (dispatch) => {
    const item = id;
    const docId = item.id
    const upItem = {
        itemName: item.itemName,
        itemQuantity: item.itemQuantity,
        itemCategory: item.itemCategory
    }
    const storageRef = doc(db, "items", docId);
    try {
        await updateDoc(storageRef, upItem);
        alert("Updated successfully!");
        // document.getElementById("updateItem").style.display = "none";
        // window.location.reload();
    } catch (error) {
        dispatch(fetchItemsFailure(error));
    }
}

export default FirestoreItems.reducer;

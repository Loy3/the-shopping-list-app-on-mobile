import { FETCH_ITEMS, DELETE_AN_ITEM, UPDATE_AN_ITEM } from "./types";


const initialState = {
    loading: false,
    error: null,
    items: []
}

// const FirestoreGetItemsSlice = createSlice({
//     name: "items",
//     initialState,
//     reducers: {
//         fetchItemsStart(state) {
//             state.loading = true;
//             state.error = null;
//         },
//         fetchItemsSuccess(state, action) {
//             state.loading = false;
//             state.items = action.payload
//         },

//         fetchItemsFailure(state, action) {
//             state.loading = null;
//             state.error = action.payload;
//         },
//         deleteItem(state, action) {
//             const index = state.items.findIndex((item) => item.id === action.payload)
//             if (index !== -1) {
//                 state.items.splice(index, 1);
//             }
//         },
//         updateMyItem(state, action) {
//             const index = state.items.findIndex((item) => item.id === action.payload)
//             if (index !== -1) {
//                 state.items.splice(index, 1);
//             }
//         }
//     }
// })


function fetchItemsStart(state) {
    state.loading = true;
    state.error = null;
}
function fetchItemsSuccess(state, action) {
    state.loading = false;
    state.items = action.payload
}

function fetchItemsFailure(state, action) {
    state.loading = null;
    state.error = action.payload;
}
function deleteItem(state, action) {
    const index = state.items.findIndex((item) => item.id === action.payload)
    if (index !== -1) {
        state.items.splice(index, 1);
    }
}
function updateMyItem(state, action) {
    const index = state.items.findIndex((item) => item.id === action.payload)
    if (index !== -1) {
        state.items.splice(index, 1);
    }
}

function reducer(state = initialState, action){
    switch(action.type){
        
    }
}
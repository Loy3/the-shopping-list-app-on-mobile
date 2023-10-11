import { FETCH_ITEMS, DELETE_AN_ITEM, UPDATE_AN_ITEM } from "./types";

function fetchItems() {
    return {
        type: FETCH_ITEMS
    };
}

function deleteAnItem() {
    return {
        type: DELETE_AN_ITEM
    };
}


function updateAnItem() {
    return {
        type: UPDATE_AN_ITEM
    };
}

const actionCreators = {
    fetchItems,
    deleteAnItem,
    updateAnItem
}

export {actionCreators};
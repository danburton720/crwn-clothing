import { BagActionTypes } from './bag.types';

export const toggleBagHidden = () => ({
    type: BagActionTypes.TOGGLE_BAG_HIDDEN
});

export const addItem = item => ({
    type: BagActionTypes.ADD_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: BagActionTypes.REMOVE_ITEM,
    payload: item
});

export const clearItemFromBag = item => ({
    type: BagActionTypes.CLEAR_ITEM_FROM_BAG,
    payload: item
});

export const clearAllItemsFromBag = () => ({
    type: BagActionTypes.CLEAR_ALL_ITEMS_FROM_BAG
});
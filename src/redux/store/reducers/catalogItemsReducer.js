import {
  ADD_ITEM_CATALOG_ITEMS,
  FETCH_CATALOG_ITEMS,
  FETCH_CATALOG_ITEMS_ERROR,
  FETCH_CATALOG_ITEMS_SUCCESS,
  REMOVE_ITEM_CATALOG_ITEMS,
} from "../../types/catalogItems";

import { deleteItemFromArray } from "../../../utils/deleteItemFromArray";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export const catalogItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATALOG_ITEMS: {
      return { ...state, loading: true, error: null };
    }
    case FETCH_CATALOG_ITEMS_SUCCESS: {
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    }
    case FETCH_CATALOG_ITEMS_ERROR: {
      return { ...state, loading: false, error: action.payload };
    }
    case ADD_ITEM_CATALOG_ITEMS: {
      return {
        ...state,
        items: [action.payload, ...state.availableBikes],
      };
    }
    case REMOVE_ITEM_CATALOG_ITEMS: {
      const newItems = deleteItemFromArray(state.items, action.payload);
      return {
        ...state,
        items: newItems,
      };
    }
    default:
      return state;
  }
};

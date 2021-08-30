import {
  ADD_ITEM,
  ADD_ITEM_ERROR,
  ADD_ITEM_SUCCESS,
  DELETE_ITEM,
  DELETE_ITEM_ERROR,
  DELETE_ITEM_SUCCESS,
  EDIT_ITEM,
  EDIT_ITEM_ERROR,
  EDIT_ITEM_SUCCESS,
  SET_ITEM_IMG,
} from "../../types/item";

const initialState = {
  loading: false,
  itemImg: null,
  loadingID: null,
  error: null,
};

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      return { ...state, loading: true, loadingID: null, newItem: null };
    }
    case ADD_ITEM_SUCCESS: {
      return {
        ...state,
        loading: false,
        itemImg: null,
        newItem: action.payload,
      };
    }
    case ADD_ITEM_ERROR: {
      return { ...state, loading: false, error: action.payload, itemImg: null };
    }
    case EDIT_ITEM: {
      return { ...state, loading: true, loadingID: null };
    }
    case EDIT_ITEM_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case EDIT_ITEM_ERROR: {
      return { ...state, loading: false, error: action.payload };
    }
    case DELETE_ITEM: {
      return { ...state, loading: true, loadingID: action.payload };
    }
    case DELETE_ITEM_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case DELETE_ITEM_ERROR: {
      return { ...state, loading: false, error: action.payload };
    }
    case SET_ITEM_IMG: {
      return {
        ...state,
        itemImg: action.payload,
      };
    }
    default:
      return state;
  }
};

import {
  ADD_ITEM,
  ADD_ITEM_SUCCESS,
  DELETE_ITEM,
  DELETE_ITEM_ERROR,
  DELETE_ITEM_SUCCESS,
  EDIT_ITEM,
  EDIT_ITEM_ERROR,
  EDIT_ITEM_SUCCESS,
  SET_ITEM_IMG,
} from "../../types/item";

import { toast } from "react-toastify";

export const deleteItem = (itemID) => {
  return {
    type: DELETE_ITEM,
    payload: itemID,
  };
};

export const deleteItemError = (error) => {
  toast.error(error);
  return {
    type: DELETE_ITEM_ERROR,
    payload: error,
  };
};

export const deleteItemSuccess = () => {
  toast.success("Item was deleted!", {
    toastId: "deleting-toast",
  });
  return {
    type: DELETE_ITEM_SUCCESS,
  };
};

export const addItem = (values) => {
  return {
    type: ADD_ITEM,
    payload: values,
  };
};

export const addItemError = (error) => {
  toast.error(error);
  return {
    type: ADD_ITEM,
    payload: error,
  };
};

export const addItemSuccess = () => {
  toast.success("New item was added to catalog!", {
    toastId: "adding-toast",
  });
  return {
    type: ADD_ITEM_SUCCESS,
  };
};

export const editItem = (values) => {
  return {
    type: EDIT_ITEM,
    payload: values,
  };
};

export const editItemError = (error) => {
  toast.error(error);
  return {
    type: EDIT_ITEM_ERROR,
    payload: error,
  };
};

export const editItemSuccess = () => {
  toast.success("Item was updated successfully!", {
    toastId: "edit-toast",
  });
  return {
    type: EDIT_ITEM_SUCCESS,
  };
};

export const setItemImg = (img) => {
  return {
    type: SET_ITEM_IMG,
    payload: img,
  };
};

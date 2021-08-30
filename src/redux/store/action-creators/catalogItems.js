import {
  ADD_ITEM_CATALOG_ITEMS,
  FETCH_CATALOG_ITEMS,
  REMOVE_ITEM_CATALOG_ITEMS,
} from "../../types/catalogItems";

export const fetchCatalogItems = () => {
  return {
    type: FETCH_CATALOG_ITEMS,
  };
};

export const addItemToCatalog = (newItem) => {
  return {
    type: ADD_ITEM_CATALOG_ITEMS,
    payload: newItem,
  };
};

export const removeItemFromCatalog = (itemID) => {
  return {
    type: REMOVE_ITEM_CATALOG_ITEMS,
    payload: itemID,
  };
};

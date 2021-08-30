import { combineReducers } from "redux";
import { catalogItemsReducer } from "./catalogItemsReducer";
import { itemReducer } from "./itemReducer";
import { formReducer } from "./formReducer";

export const rootReducer = combineReducers({
  catalogItems: catalogItemsReducer,
  item: itemReducer,
  form: formReducer,
});

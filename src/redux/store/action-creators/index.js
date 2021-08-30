import * as CatalogItemsActionCreators from "./catalogItems";
import * as ItemActionCreators from "./item";
import * as FormActionCreators from "./form";
export default {
  ...CatalogItemsActionCreators,
  ...ItemActionCreators,
  ...FormActionCreators,
};

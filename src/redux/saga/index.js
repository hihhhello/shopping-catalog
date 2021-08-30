import { all } from "redux-saga/effects";
import { catalogItemsWatcher } from "./catalogItemsSaga";
import { itemsWatcher } from "./itemSaga";
export function* rootWatcher() {
  yield all([catalogItemsWatcher(), itemsWatcher()]);
}

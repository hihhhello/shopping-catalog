import { put, call, takeEvery } from "redux-saga/effects";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import {
  FETCH_CATALOG_ITEMS,
  FETCH_CATALOG_ITEMS_ERROR,
  FETCH_CATALOG_ITEMS_SUCCESS,
} from "../types/catalogItems";

const fetchCatalogItems = async () => {
  const querySnapshot = await getDocs(collection(db, "items"));
  const items = [];
  querySnapshot.forEach((doc) => {
    items.push({
      id: doc.id,
      data: doc.data(),
    });
  });
  return items;
};

function* fetchCatalogItemsWorker() {
  try {
    const items = yield call(fetchCatalogItems);
    yield put({
      type: FETCH_CATALOG_ITEMS_SUCCESS,
      payload: items,
    });
  } catch (e) {
    yield put({
      type: FETCH_CATALOG_ITEMS_ERROR,
      payload: "Something gone wrong while fetching items...",
    });
  }
}

export function* catalogItemsWatcher() {
  yield takeEvery(FETCH_CATALOG_ITEMS, fetchCatalogItemsWorker);
}

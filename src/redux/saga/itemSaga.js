import { put, call, takeEvery } from "redux-saga/effects";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../firebase";
import { DELETE_ITEM, ADD_ITEM, EDIT_ITEM, SET_ITEM_IMG } from "../types/item";
import { REMOVE_ITEM_CATALOG_ITEMS } from "../types/catalogItems";
import { getFileName } from "../../utils/getFileName";
import {
  addItemError,
  addItemSuccess,
  deleteItemError,
  deleteItemSuccess,
  editItemError,
  editItemSuccess,
} from "../store/action-creators/item";

const addItem = async ({ image, ...itemData }) => {
  const imgRef = ref(storage, getFileName(image.name));
  await uploadBytes(imgRef, image);
  const imgUrl = await getDownloadURL(imgRef);
  const docRef = await addDoc(collection(db, "items"), {
    img: imgUrl,
    ...itemData,
  });
  return docRef;
};

function* addItemWorker({ payload }) {
  try {
    yield call(addItem, payload);
    yield put(addItemSuccess());
    yield put({
      type: SET_ITEM_IMG,
      payload: null,
    });
  } catch (e) {
    yield put(addItemError("Something gone wrong while adding item..."));
  }
}

const editItem = async ({ image, id, ...itemData }) => {
  if (typeof image !== "string") {
    // if File
    const imgRef = ref(storage, getFileName(image.name));
    await uploadBytes(imgRef, image);
    const imgUrl = await getDownloadURL(imgRef);
    await updateDoc(doc(db, "items", id), {
      ...itemData,
      img: imgUrl,
    });
    return;
  }
  await updateDoc(doc(db, "items", id), itemData);
};

function* editItemWorker({ payload }) {
  try {
    yield call(editItem, payload);
    yield put(editItemSuccess());
  } catch (e) {
    console.log(e);
    yield put(editItemError("Something gone wrong while editing item..."));
  }
}

const deleteItem = async (itemID) => {
  await deleteDoc(doc(db, "items", itemID));
};

function* deleteItemWorker({ payload }) {
  try {
    yield call(deleteItem, payload);
    yield put(deleteItemSuccess());
    yield put({
      type: REMOVE_ITEM_CATALOG_ITEMS,
      payload,
    });
  } catch (e) {
    yield put(deleteItemError("Something gone wrong while deleting item..."));
  }
}

export function* itemsWatcher() {
  yield takeEvery(DELETE_ITEM, deleteItemWorker);
  yield takeEvery(ADD_ITEM, addItemWorker);
  yield takeEvery(EDIT_ITEM, editItemWorker);
}

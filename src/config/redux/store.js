import { legacy_createStore as createStore } from "redux";

import { rootReducer } from "./rootReducer";

function saveToLocalStorage(state) {
  const serializedState = JSON.stringify(state);
  localStorage.setItem("state", serializedState);
}

function loadFromLocalStorage() {
  const serializedState = localStorage.getItem("state");
  if (serializedState === null) return undefined;
  return JSON.parse(serializedState);
}

const persistedState = loadFromLocalStorage();

export const store = createStore(rootReducer, persistedState);

store.subscribe(() => saveToLocalStorage(store.getState()));

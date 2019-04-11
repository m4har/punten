import { put, takeLatest } from "redux-saga/effects";

import { api } from "./Api";
function* PostLogin(action) {
  try {
    const result = yield api.PostLogin(action.dataLogin);
    yield put({ type: "LOGIN_SUCCESS", result });
    
  } catch (error) {
    yield put({ type: "LOGIN_ERROR", error });
  }
}

export function* WatchPostLogin() {
  yield takeLatest("LOGIN_POST", PostLogin);
}

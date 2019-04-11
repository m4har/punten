// Manajemen semua sagas

import { fork } from "redux-saga/effects";
import { PostLogin } from "./LoginSagas";

export default function* rootSaga() {
  yield [fork(PostLogin)];
}
// belum di coba
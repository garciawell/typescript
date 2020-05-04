import { all, fork } from 'redux-saga/effects';
import todo from './modules/todo/saga';

export default function* root() {
  yield all([
    fork(todo),
    // fork(dynamics),
  ]);
}

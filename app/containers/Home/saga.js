import { takeLatest, call, put, all } from 'redux-saga/effects';
import request from 'utils/requests';
import { getChatsSuccess } from './actions';
import { GET_CHATS } from './constants';

export function* getChats() {
  const url = 'https://my-json-server.typicode.com/mounikr23/chats-data/chats';
  try {
    const response = yield call(request, url);
    console.log('response', response);
    yield put(getChatsSuccess(response));
  } catch (err) {
    // console.log(err);
  }
}
// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield all([
    takeLatest(GET_CHATS, getChats),
  ]);
}

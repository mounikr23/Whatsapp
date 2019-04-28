/*
 *
 * Home reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_CHATS, GET_CHATS_SUCCESS, GET_CHATS_FAILURE,
} from './constants';
import _get from 'lodash/get';

const initialState = fromJS({
  chats: [],
  fetchingChats: false,
});

function homeReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_CHATS:
      return state.set('fetchingChats', true);
    case GET_CHATS_SUCCESS:
      return state
        .set('fetchingChats', false)
        .set('chats', fromJS(payload));
    case GET_CHATS_FAILURE:
      return state;
    default:
      return state;
  }
}

export default homeReducer;

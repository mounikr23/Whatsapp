/*
 *
 * Home actions
 *
 */

import {
  GET_CHATS,
  GET_CHATS_SUCCESS,
  GET_CHATS_FAILURE,
} from './constants';

export function getChats() {
  return {
    type: GET_CHATS,
  };
}

export function getChatsSuccess(payload) {
  return {
    type: GET_CHATS_SUCCESS,
    payload,
  };
}

export function getChatsFailure(payload) {
  return {
    type: GET_CHATS_FAILURE,
    payload,
  };
}

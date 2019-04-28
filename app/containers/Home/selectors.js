import { createSelector } from 'reselect';

/**
 * Direct selector to the home state domain
 */
const selectHomeDomain = (state) => state.get('home');

/**
 * Other specific selectors
 */
const selectChats = () => createSelector(selectHomeDomain, substate =>
  substate.get('chats').toJS()
);

/**
 * Default selector used by Home
 */

const makeSelectHome = () => createSelector(
  selectHomeDomain,
  (substate) => substate.toJS()
);

// export default makeSelectHome;
export {
  selectHomeDomain,
  makeSelectHome,
  selectChats,
};

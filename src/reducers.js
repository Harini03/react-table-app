/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';

import EventsReducer from './containers/Events/reducers';
import MembersReducer from './containers/Members/reducers';


/**
 * Creates the main reducer with the dynamically injected ones
 */
const rootReducer = combineReducers({
  events: EventsReducer,
  members: MembersReducer
});

export default rootReducer;

/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
  
  const initialState = {
    isFetching: false,
    isError: false,
    visible: false,
    events: []
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case "FETCH_EVENTS_BEGIN": {
        return Object.assign({}, state, {
          isFetching: true
        });
      }
      case "FETCH_EVENTS_SUCCESS": {
        return Object.assign({}, state, {
          isFetching: false,
          events: action.payload
        });
      }
      case "FETCH_EVENTS_ERROR": {
        return Object.assign({}, state, {
          isFetching: false,
          isError: true,
          events: action.payload
        });
      }
     
      default:
        return state;
    }
  }
  
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
    memberUpdated: false,
    members: []
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case "FETCH_MEMBERS_BEGIN": {
        return Object.assign({}, state, {
          isFetching: true
        });
      }
      case "FETCH_MEMBERS_SUCCESS": {
        return Object.assign({}, state, {
          isFetching: false,
          members: action.payload
        });
      }
      case "FETCH_MEMBERS_ERROR": {
        return Object.assign({}, state, {
          isFetching: false,
          isError: true,
          members: action.payload
        });
      }
      case 'UPDATE_MEMBER':{
        let ind = state.members.findIndex(member=>member==action.member);
        //state.members[ind].events=action.payload;
        console.log(ind);
        return Object.assign({}, state, {
            members: state.members.map(
              (content, i)=>i===ind ? Object.assign({}, content,{
                events: content.events.push(action.payload)? content.events: content.events
              }) : content
            ),
            memberUpdated: true,
            isError: false
            });
          
      }
     
      default:
        return state;
    }
  }
  
import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  ADD_START,
  ADD_SUCCESS,
  ADD_FAILURE,
  DELETE_START,
  DELETE_SUCCESS,
  DELETE_FAILURE
} from "../actions";

/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
  smurfs: [],
  status: {
    isFetching: false,
    isAdding: false,
    isUpdating: false,
    isDeleting: false,
    error: null
  }
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        status: {
          ...state.status,
          isFetching: true
        }
      };

    case FETCH_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        smurfs: action.payload,
        status: {
          ...state.status,
          isFetching: false
        },
        error: null
      };
    case FETCH_FAILURE:
      return {
        ...state,
        status: {
          ...state.status,
          isFetching: true
        },
        error: action.payload
      };
    case ADD_START:
      return {
        ...state,
        state: {
          ...state.status,
          isAdding: true
        }
      };
    case ADD_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        status: {
          ...state.status,
          isAdding: false
        },
        error: null
      };
    case ADD_FAILURE:
      return {
        ...state,
        status: {
          ...state.status,
          isAdding: true
        },
        error: action.payload
      };
    case DELETE_START:
      return {
        ...state,
        status: {
          ...state.status,
          isDeleting: true
        }
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        status: {
          ...state.status,
          isDeleting: false
        },
        smurfs: action.payload,
        error: null
      };

    case DELETE_FAILURE:
      return {
        ...state,
        status: {
          ...state.status,
          isDeleting: true
        },
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;

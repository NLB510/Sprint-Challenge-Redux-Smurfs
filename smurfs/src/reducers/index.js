import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";

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
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const reducer =  (state = initialState, action) => {
  switch(action.type) {
    case FETCH_START: 
    return {
      ...state,
      status: {
        ...state.status,
        isFetching: true
      }
    }

    case FETCH_SUCCESS: 
    console.log(action.payload)
    return {
      ...state,
      smurfs: action.payload,
      status: {
        ...state.status,
        isFetching: false
      }
    }
    case FETCH_FAILURE: 
    return {
      ...state,
      status: {
        ...state.status,
        isFetching: true
      },
      error: action.payload
    }
    default: 
    return state
  }
}


export default reducer



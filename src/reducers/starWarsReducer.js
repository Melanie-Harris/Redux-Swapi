import {FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS, FETCH_DATA_START} from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: '',
  
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START: 
    return {
      ...state, 
      fetching: true,
      error: '',
    }
    case FETCH_DATA_SUCCESS:
      return{
        ...state,
        fetching: false,
        error: '',
        // axios call
        characters: action.payload
      }
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        fetching: false,
        // dispatch.payload
        error: action.payload
      }

    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};

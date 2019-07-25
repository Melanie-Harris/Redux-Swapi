//3) we'll need axios
 import axios from "axios"; 


// 2) we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

// 4)our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const fetchData = () => dispatch => {
    dispatch({ type: FETCH_DATA_START });
    axios
        .get("https://swapi.co/api/people")
        .then(res => {
            dispatch({ type: FETCH_DATA_SUCCESS,
                // action = dispatch
            payload: res.data.results });
        })
        .catch((error)=> {
            dispatch({
                type: FETCH_DATA_FAILURE,
                payload: error
            });
        })
}
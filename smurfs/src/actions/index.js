import axios from 'axios';

export const GET_SMURF_START = "GET_SMURF_START";
export const GET_SMURF_SUCCESS = "GET_SMURF_SUCCESS";
export const GET_SMURF_FAILURE = "GET_SMURF_FAILURE";

export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

const URL = "localhost:3333/smurfs"


export const getSmurfs = () => dispatch =>{
  dispatch({type:GET_SMURF_START})
  return axios
  .get(URL)
  .then(res=>{
    dispatch({type:GET_SMURF_SUCCESS, payload: res.data})
  })
  .catch(err=>console.log(err))
}

export const addSmurf = smurf => dispatch =>{
  dispatch({type:ADD_SMURF_START})
  return axios
  .post(URL)
  .then(res=>{
    dispatch({type:ADD_SMURF_SUCCESS, payload: res.data})
  })
  .then(err=>console.log(err))
}
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

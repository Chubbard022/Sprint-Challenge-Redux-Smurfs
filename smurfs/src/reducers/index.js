import {
  GET_SMURF_START,
  GET_SMURF_SUCCESS,
  GET_SMURF_FAILURE,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE
} from '../actions'

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

const reducer = (state=initialState, action) =>{
  switch(action.type){
    case GET_SMURF_START:
      return{
        ...state,
        error: '',
        fetchingSmurfs: true
      }
    case GET_SMURF_SUCCESS:
      return{
        ...state,
        error: null,
        smurfs: action.payload,
        fetchingSmurfs: false,

      }
    case GET_SMURF_FAILURE:
      return{
        ...state,
        error:action.payload
      }
    case ADD_SMURF_START:
      return{
        ...state,
        error:'',
        addingSmurf: true,
      }
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        error: null,
        addingSmurf:false,

      }
    case ADD_SMURF_FAILURE:
      return{
        ...state,
        error:action.payload
      }
    default:
    return state;
  }
}
export default reducer;
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

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//This Saga will take in the new DATA from the Adventure Form and Dispatch it to the Server
//to be INSERTED.
//It will then call SET_RECENT to call a new GET to refresh the recent website.
function* addNew(action){
    try{
        const serverResponse = yield axios.post('/api/newadventure',action.payload);
        const nextAction ={type:'GET_RECENT', payload:serverResponse.data};
        yield put(nextAction);
    }catch(error){
        console.log(error,'in post newAdventure saga');
    }
}

function* typeSaga() {
    yield takeLatest('ADD_ADVENTURE', addNew);
  }
  
  export default typeSaga;
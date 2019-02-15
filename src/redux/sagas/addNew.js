import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addNew(action){
    try{
        const serverResponse = yield axios.post('/api/newadventure');
        const nextAction ={type:'SET_RECENT', payload:serverResponse.data};
        yield put(nextAction);
    }catch(error){
        console.log(error,'in post newAdventure saga');
    }
}

function* typeSaga() {
    yield takeLatest('ADD_ADVENTURE', addNew);
  }
  
  export default addNew;
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getType(action){
    try{
        const serverResponse = yield axios.get('/api/type');
        const nextAction ={type:'SET_TYPE', payload:serverResponse.data};
        yield put(nextAction);
    }catch(error){
        console.log(error,'in get Type saga');
    }
}

function* typeSaga() {
    yield takeLatest('GET_TYPE', getType);
  }
  
  export default typeSaga;

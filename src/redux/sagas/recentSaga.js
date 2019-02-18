import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getRecent(action){
    try{
        const serverResponse = yield axios.get('/api/recent');
        const nextAction ={type:'SET_RECENT', payload:serverResponse.data};
        yield put(nextAction);
    }catch(error){
        console.log(error,'in get Recent saga');
    }
}

function* recentSaga() {
    yield takeEvery('GET_RECENT', getRecent);
  }
  
  export default recentSaga;
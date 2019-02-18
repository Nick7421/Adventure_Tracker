import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getRoad(action){
    try{
        const serverResponse = yield axios.get('/api/road');
        const nextAction ={type:'SET_ROAD', payload:serverResponse.data};
        yield put(nextAction);
    }catch(error){
        console.log(error,'in get Road saga');
    }
}

function* roadSaga() {
    yield takeEvery('GET_ROAD', getRoad);
  }
  
  export default roadSaga;
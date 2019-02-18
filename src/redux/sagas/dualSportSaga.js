import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getDualSport(action){
    try{
        const serverResponse = yield axios.get('/api/dualsport');
        const nextAction ={type:'SET_DUALSPORT', payload:serverResponse.data};
        yield put(nextAction);
    }catch(error){
        console.log(error,'in get DUALSPORT saga');
    }
}

function* dualSportSaga() {
    yield takeEvery('GET_DUALSPORT', getDualSport);
  }
  
  export default dualSportSaga;
import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getHiking(action){
    try{
        const serverResponse = yield axios.get('/api/hiking');
        const nextAction ={type:'SET_HIKING', payload:serverResponse.data};
        yield put(nextAction);
    }catch(error){
        console.log(error,'in get Hiking saga');
    }
}

function* hikingSaga() {
    yield takeEvery('GET_HIKING', getHiking);
  }
  
  export default hikingSaga;
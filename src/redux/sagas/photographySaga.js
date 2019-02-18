import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getPhotography(action){
    try{
        const serverResponse = yield axios.get('/api/photography');
        const nextAction ={type:'SET_PHOTOGRAPHY', payload:serverResponse.data};
        yield put(nextAction);
    }catch(error){
        console.log(error,'in get Photography saga');
    }
}

function* photographySaga() {
    yield takeEvery('GET_PHOTOGRAPHY', getPhotography);
  }
  
  export default photographySaga;
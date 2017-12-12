import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import ReacRestoActions from '../Redux/ReactRestoRedux'
import ZomatoAPI from '../Services/ZomatoAPI'

const api = ZomatoAPI.create()

export function* getCategories(api){
    const response = yield call(api.getCategories)
    if(response.ok){
        //ok, call action from redux
        console.log('Response : ', response)
        yield put(ReacRestoActions.categoriesSucceed(response.data))
    }else{
        yield put(ReacRestoActions.categoriesFailed(response.error))
    }
}
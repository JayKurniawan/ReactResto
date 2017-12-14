import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import ReactRestoActions from '../Redux/ReactRestoRedux'
import ZomatoAPI from '../Services/ZomatoAPI'

const api = ZomatoAPI.create()

export function* getCategories(api){
    const response = yield call(api.getCategories)
    if(response.ok){
        //ok, call action from redux
        console.log('Response : ', response)
        yield put(ReactRestoActions.categoriesSucceed(response.data))
    }else{
        yield put(ReactRestoActions.categoriesFailed(response.error))
    }
}

export function* getRestaurants(action){
    console.log('Request for restaurants')
    const response = yield call(api.getRestaurants)
    if(response.ok){
        console.log('Request success')
        yield put(ReactRestoActions.restaurantsSucceed(response.data))
        console.log('Restaurants:', response)
    }else{
        console.log('Request failed')
        yield put(ReactRestoActions.restaurantsFailed(response.error))
        console.log('Restaurants:', response)
    }
}
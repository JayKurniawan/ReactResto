import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import ReactRestoActions from '../Redux/ReactRestoRedux'
import ZomatoAPI from '../Services/ZomatoAPI'

const api = ZomatoAPI.create()

export function* getCategories(){
    const response = yield call(api.invokeRequest, 'categories', 'GET', '')
    if(response.ok){
        //ok, call action from redux
        console.log('Response : ', response)
        yield put(ReactRestoActions.categoriesSucceed(response.data))
    }else{
        yield put(ReactRestoActions.categoriesFailed(response.error))
    }
}

export function* getRestaurants(api,action){
    // const { cityId, categoryId } = action
    console.log('Request for restaurants')
    const response = yield call(api.invokeRequest, 'search?entity_id=' +action.cityId+ '&entity_type=city&category=' +action.categoryId, 'GET', '')
    if(response.ok){
        console.log('Request success')
        yield put(ReactRestoActions.restaurantsSucceed(response.data))
        console.log('Response:', response)
    }else{
        console.log('Request failed')
        yield put(ReactRestoActions.restaurantsFailed(response.error))
        console.log('Response:', response)
    }
}
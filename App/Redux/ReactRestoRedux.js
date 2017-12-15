import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'


const { Types, Creators } = createActions({
    // Categories types
    categoriesRequest: null,
    categoriesSucceed: ['categoriesPayload'],
    categoriesFailed: ['categoriesErrorMessage'],

    // Restaurants types
    restaurantsRequest: ['cityId, categoryId'],
    restaurantsSucceed: ['restaurantsPayload'],
    restaurantsFailed: ['restaurantsErrorMessage'],
    cityIdAndCategoryId: ['cityAndCategory']
})

export const ReactRestoTypes = Types
export default Creators

// Initial state
export const INITIAL_STATE = Immutable({
    // Categories
    categoriesPayload: null,
    categoriesErrorMessage: null,
    fetchCategories: false,

    // Restaurants
    cityId: null,
    categoryId: null,
    restaurantsPayload: null,
    fetchRestaurants: false,
    restaurantsErrorMessage: null,
    cityAndCategory: 285
})

// Categories Reducers
export const categoriesRequest = (state) => 
    state.merge({ fetchCategories: true })

export const categoriesSucceed = (state, action) => {
    const { categoriesPayload } = action
    return state.merge({ 
        fetchCategories: false, categoriesErrorMessage: null, categoriesPayload
    })
}

export const categoriesFailed = (state) =>
    state.merge({ fetchCategories: false, errorMessage: true})

// Restaurants Reducers
export const restaurantsRequest = (state) => 
    state.merge({ fetchRestaurants: true })

export const restaurantsSucceed = (state, action) => {
    const {restaurantsPayload} = action
    return state.merge({
        fetchRestaurants: false, restaurantsErrorMessage: null, restaurantsPayload
    })
}

export const restaurantsFailed = (state, action) => state.merge({
    fetchRestaurants: false, restaurantsErrorMessage: action.restaurantsErrorMessage
})

export const cityIdAndCategoryId = (state, action) => state.merge({
    cityAndCategory: action.cityAndCategory
})

export const reducer = createReducer(INITIAL_STATE, {
    // Categories
    [Types.CATEGORIES_REQUEST]: categoriesRequest,
    [Types.CATEGORIES_SUCCEED]: categoriesSucceed,
    [Types.CATEGORIES_FAILED]: categoriesFailed,

    // Restaurants
    [Types.RESTAURANTS_REQUEST]: restaurantsRequest,
    [Types.RESTAURANTS_SUCCEED]: restaurantsSucceed,
    [Types.RESTAURANTS_FAILED]: restaurantsFailed,
    [Types.CITY_ID_AND_CATEGORY_ID]: cityIdAndCategoryId
})
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

// Categories types
const { Types, Creators } = createActions({
    categoriesRequest: null,
    categoriesSucceed: ['payload'],
    categoriesFailed: null
})

export const ReactRestoTypes = Types
export default Creators

// Initial state
export const INITIAL_STATE = Immutable({
    payload: null,
    errorMessage: null,
    fetchCategories: false
})

// Reducers
export const categoriesRequest = (state) => 
    state.merge({ fetchCategories: true })

export const categoriesSucceed = (state, action) => {
    const { payload } = action
    return state.merge({ fetchCategories: false, errorMessage: null, payload})
}

export const categoriesFailed = (state) =>
    state.merge({ fetchCategories: false, errorMessage: true})

export const reducer = createReducer(INITIAL_STATE, {
    [Types.CATEGORIES_REQUEST]: categoriesRequest,
    [Types.CATEGORIES_SUCCEED]: categoriesSucceed,
    [Types.CATEGORIES_FAILED]: categoriesFailed
})
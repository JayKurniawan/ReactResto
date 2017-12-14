import { takeLatest, all } from 'redux-saga/effects'
//import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'
import ZomatoAPI from '../Services/ZomatoAPI'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { GithubTypes } from '../Redux/GithubRedux'
import { ReactRestoTypes } from '../Redux/ReactRestoRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getUserAvatar } from './GithubSagas'
import { getCategories, getRestaurants } from './ReactRestoSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : ZomatoAPI.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([

    takeLatest(ReactRestoTypes.CATEGORIES_REQUEST, getCategories, api),

    takeLatest(ReactRestoTypes.RESTAURANTS_REQUEST, getRestaurants, api)


  ])
}
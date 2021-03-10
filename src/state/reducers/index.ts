import {combineReducers} from 'redux'
import {repositoriesReducer} from './repositoriesReducer'

const rootReducers = combineReducers({
    repositoriesState : repositoriesReducer
})

export {rootReducers}
export type RootState = ReturnType<typeof rootReducers>
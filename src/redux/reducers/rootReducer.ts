import { combineReducers } from 'redux'
import { moviesReducer } from './moviesReducer'

const rootReducers = combineReducers({
    moviesState: moviesReducer
})

export { rootReducers }
export type RootState = ReturnType<typeof rootReducers>

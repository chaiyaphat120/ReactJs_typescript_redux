import { combineReducers } from 'redux'
import { MoviesReducer } from './moviesReducer'

const rootReducers = combineReducers({
    MoviesState: MoviesReducer
})

export { rootReducers }
export type RootState = ReturnType<typeof rootReducers>

import { combineReducers } from 'redux'
import { repositoriesReducer } from './repositoriesReducer'
import { MoviesReducer } from './moviesReducer'

const rootReducers = combineReducers({
    repositoriesState: repositoriesReducer,
    MoviesState: MoviesReducer
})

export { rootReducers }
export type RootState = ReturnType<typeof rootReducers>

import { ActionType } from '../types/action-types'
import { Action } from '../types/actions-type-of-reducer/repositoriesTypeOfReducer'
interface RepositoriesState {
    moviesList: Array<{ name: string, price: number, quantity: number }>
}

const initialState = {
    moviesList: [
        { name: 'Article 1', price: 5, quantity: 10 },
        { name: 'Article 2', price: 15, quantity: 8 },
        { name: 'Article 3', price: 7, quantity: 15 },
        { name: 'Article 4', price: 9, quantity: 5 },
        { name: 'Article 5', price: 11, quantity: 100 },
        { name: 'Article 6', price: 23, quantity: 20 },
    ]
}

const MoviesReducer = (
    state: RepositoriesState = initialState,
    action: Action
): RepositoriesState => {
    switch (action.type) {
        case ActionType.FETCH_DATA:
            const { name, price, quantity } = action.payload
            return {
                moviesList: [...state.moviesList, { name, price, quantity }]
            }

        default:
            return state
    }
}

export { MoviesReducer }

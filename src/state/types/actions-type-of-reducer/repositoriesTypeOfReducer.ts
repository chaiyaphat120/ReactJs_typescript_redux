
import { ActionType } from '../action-types'

interface SearchRepositoriesAction {
    type: ActionType.SEARCH_REPOSITORIES
}
interface SearchRepositoriesSuccessAction {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS
    payload: string[]
}
interface SearchRepositoriesErrorAction {
    type: ActionType.SEARCH_REPOSITORIES_ERROR
    payload: string
}

//2.2  defined payload type
interface FetchData {
    type: ActionType.FETCH_DATA
    payload: {
        name: string, price: number, quantity: number
    }
}

export type Action =
    | SearchRepositoriesAction
    | SearchRepositoriesSuccessAction
    | SearchRepositoriesErrorAction
    | FetchData


import { ActionType } from './types'

//2.2  defined payload type
interface FetchData {
    type: ActionType.FETCH_DATA
    payload: {
        name: string, price: number, quantity: number
    }
}

export type Action =

    | FetchData

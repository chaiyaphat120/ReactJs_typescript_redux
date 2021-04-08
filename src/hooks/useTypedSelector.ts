import  {useSelector , TypedUseSelectorHook} from 'react-redux'
import {RootState} from '../state/reducers/rootReducer'

export const useTypedSelector:TypedUseSelectorHook<RootState> = useSelector
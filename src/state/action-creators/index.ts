import axios from 'axios'
import {ActionType} from '../types/action-types'
import {Dispatch} from 'redux'
import {Action} from '../types/actions-type-to-reducer'

export const searchRepositories = (term : string) =>{
    return async (dispatch :Dispatch<Action>) =>{
        dispatch({
            type:ActionType.SEARCH_REPOSITORIES
        })
        
        try {
            const {data} = await axios.get('http://registry.npmjs.org/-/v1/search',{
                params:{
                    text:term
                }
            })
            console.log("data",data.object)
            const names = data.objects.map((result:any)=>{
                return result.package.name
            })
            console.log("names",names);
            
            dispatch({
                type:ActionType.SEARCH_REPOSITORIES_SUCCESS,
                payload:names
            })
        } catch (error) {
            dispatch({
                type:ActionType.SEARCH_REPOSITORIES_ERROR,
                payload:error.message
            })
        }
    }
}
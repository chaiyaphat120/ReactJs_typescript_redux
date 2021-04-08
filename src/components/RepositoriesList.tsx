import { useState } from "react"
import { useTypedSelector } from "../state"
import { useDispatch } from "react-redux"
import { actionCreators } from "../state"
import { ActionType } from "../state/types/action-types"
const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState("")
    const dispatch = useDispatch()
    const { data, error, loading } = useTypedSelector(
        (state) => state.repositoriesState
    )
    const { moviesList } = useTypedSelector((state) => state.MoviesState)

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(actionCreators.searchRepositories(term))
    }

    let DataComponent: React.ReactNode = <div>..</div>
    const dataComponentFc = () => {
        if (error && loading) {
            return
        }
        return data.map((name) => <div key={name}>{name}</div>)
    }
    DataComponent = dataComponentFc()

    return (
        <div>
            <button
                onClick={() =>
                    dispatch({
                        type: ActionType.FETCH_DATA,
                        payload: { name: "art", price: 200, quantity: "200" },
                    })
                }
            >
                Click
            </button>
            {moviesList.map(movie =>{
                return(
                    <div>{movie.name} : {movie.price} {movie.quantity}  </div>
                )
            })}
            <form onSubmit={onSubmit}>
                <input value={term} onChange={(e) => setTerm(e.target.value)} />
                <button>Search</button>
            </form>
            {error && <h3>{error}</h3>}
            {loading && <h3>loading...</h3>}
            {DataComponent}
        </div>
    )
}
export default RepositoriesList

import { useTypedSelector } from "../state"
import { useDispatch } from "react-redux"
import { ActionType } from "../state/types/action-types"
const RepositoriesList: React.FC = () => {
    const dispatch = useDispatch()
    const { moviesList } = useTypedSelector((state) => state.MoviesState)

    const onSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault()
        dispatch({
            type: ActionType.FETCH_DATA,
            payload: { name: "art", price: 200, quantity: "200" },
        })
    }
    let todoComponent: React.ReactNode = <div></div>
    if (moviesList.length) {
        todoComponent = moviesList.map((movie) => {
            return (
                <div>
                    {movie.name} : {movie.price} {movie.quantity}{" "}
                </div>
            )
        })
    }
    return (
        <div>
            <button onClick={onSubmit}>Click</button>
            {todoComponent}
        </div>
    )
}
export default RepositoriesList

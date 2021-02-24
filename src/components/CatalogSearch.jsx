import { useDispatch, useSelector } from "react-redux"
import { changeValue, fetchFilterItems } from "../actions/actionCreators"

export default function CatalogSearch() {


    const { value } = useSelector(state => state.changeValueReducer)
    const { activeCategory } = useSelector(state => state.categoriesReducer)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(fetchFilterItems(e.target.search.value, activeCategory))
    }

    const handleChange = (e) => {
        dispatch(changeValue(e.target.value))
    }

    return (
        <form onSubmit={handleSubmit} className="catalog-search-form form-inline">
            <input onChange={handleChange} value={value} name='search' className="form-control" placeholder="Поиск" />
        </form>
    )
}
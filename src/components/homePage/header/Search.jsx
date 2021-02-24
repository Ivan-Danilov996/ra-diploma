import { Fragment, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { changeValue, fetchFilterItems } from "../../../actions/actionCreators";

export default function Search() {

    const { value } = useSelector(state => state.changeValueReducer)
    const { activeCategory } = useSelector(state => state.categoriesReducer)
    const dispatch = useDispatch()

    const [redirect, setRedirect] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setRedirect(true)
        dispatch(fetchFilterItems(e.target.search.value, activeCategory))
    }

    const handleChange = (e) => {
        dispatch(changeValue(e.target.value))
    }

    const handleClick = () => {
        searchInput.current.classList.toggle('invisible')
        searchInput.current.focus()
    }
    const searchInput = useRef()

    return (
        <Fragment>
            {
                redirect ? <Redirect to="/catalog" /> :
                    <Fragment>
                        <div onClick={handleClick} data-id="search-expander" className="header-controls-pic header-controls-search"></div>
                        <form onSubmit={handleSubmit} ref={searchInput} data-id="search-form" className="header-controls-search-form form-inline invisible">
                            <input onChange={handleChange} value={value} className="form-control" name="search" placeholder="Поиск" />
                        </form>
                    </Fragment>
            }
        </Fragment >
    )
}
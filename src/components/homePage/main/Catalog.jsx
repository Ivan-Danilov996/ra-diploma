import { Fragment, useEffect } from 'react'
import ProductList from './ProductList'
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, fetchMoreItems, setActiveCategory } from "../../../actions/actionCreators";
import Categories from '../../Categories';
import { fetchCategories } from "../../../actions/actionCreators"
import { Preloader } from '../../Preloader';


export default function Catalog(props) {

    const { items, error, loading, errorMoreItems, loadingMoreItems, disable } = useSelector(state => state.itemsListReducer)
    const { categories, errorCategories, loadingCategories, activeCategory } = useSelector(state => state.categoriesReducer)
    const { value } = useSelector(state => state.changeValueReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchItems(activeCategory, value))
    }, [dispatch, activeCategory])




    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])

    const handleClick = (e, id) => {
        e.preventDefault()
        dispatch(setActiveCategory(id))
    }

    const handleBtnClick = (length, activeCategory, value) => {
        dispatch(fetchMoreItems(length, activeCategory, value))
    }

    if (error && errorCategories) {
        return (
            <p>{error}</p>
        )
    }

    return (
        <Fragment>
            <section className="catalog">
                <h2 className="text-center">Каталог</h2>
                {props.children}
                {loading && loadingCategories ? <Preloader /> :
                    <Fragment>
                        <Categories handleClick={handleClick} categories={categories} activeCategory={activeCategory} />
                        {loading ? <Preloader /> : <ProductList items={items} />}
                    </Fragment>}
                {disable ? null :
                    <div className="text-center">
                        {loadingMoreItems ? <Preloader /> :
                            (errorMoreItems ? errorMoreItems : <button onClick={() => handleBtnClick(items.length, activeCategory, value)} className="btn btn-outline-primary">Загрузить ещё</button>)}
                    </div>}
            </section>
        </Fragment>
    )
}
import ProductList from './ProductList'
import { fetchTopItems } from '../../../actions/actionCreators'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Preloader } from '../../Preloader'

export default function TopSales() {

    const { items, loading, error } = useSelector(state => state.topItemsListReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTopItems())
    }, [dispatch])


    return (
        <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>
            {loading ? <Preloader /> : (error ? error : <ProductList items={items} />)}
        </section>
    )
}
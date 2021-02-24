import ProductList from './ProductList'
import { fetchTopItems } from '../../../actions/actionCreators'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function TopSales() {

    const state = useSelector(state => state.topItemsListReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTopItems())
    }, [dispatch])

    return (
        <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>
            <ProductList { ...state }/>
        </section>
    )
}
import ProductList from './ProductList'
import { fetchTopItems } from '../../../actions/actionCreators'
import { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Preloader } from '../../Preloader'
import ReloadBtn from '../../ReloadBtn'

export default function TopSales() {

    const { items, loading, error } = useSelector(state => state.topItemsListReducer)
    const dispatch = useDispatch()
    const [reload, setReload] = useState(false)

    useEffect(() => {
        dispatch(fetchTopItems())
    }, [dispatch, reload])


    return (
        <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>
            {loading ? <Preloader /> : (error ? <Fragment> <p>{error}</p> <ReloadBtn setReload={setReload}/>  </Fragment> : <ProductList items={items} />)}
        </section>
    )
}
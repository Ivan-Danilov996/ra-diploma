import { Fragment } from 'react'
import banner from '../../../img/banner.jpg'
import Catalog from './Catalog'
import ProductList from './ProductList'
import TopSales from './TopSales'

export default function Main() {
    return (
        <Fragment>
            <TopSales />
            <Catalog />
        </Fragment>

    )
}
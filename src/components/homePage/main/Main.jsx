import { Fragment } from 'react'
import Catalog from './Catalog'
import TopSales from './TopSales'

export default function Main() {
    return (
        <Fragment>
            <TopSales />
            <Catalog />
        </Fragment>

    )
}
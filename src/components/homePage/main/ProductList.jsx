import Product from "./Product";
import { Fragment } from "react";


export default function ProductList({ items}) {
    return (
        <Fragment>
            <div className="row">
                {items && items.map(item => {
                    return <Product key={item.id} {...item} />
                })}
            </div>
        </Fragment>
    )
}
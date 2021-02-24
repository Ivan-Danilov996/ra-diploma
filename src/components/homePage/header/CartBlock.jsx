import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { addToCart, getItems } from "../../../actions/actionCreators"

export default function CartBlock() {
    const { items } = useSelector(state => state.cartReducer)
    return (
        <Link to='/cart' className="header-controls-pic header-controls-cart">
            {items.length === 0 ? null : <div className="header-controls-cart-full">{items.length}</div>}
            <div className="header-controls-cart-menu"></div>
        </Link>
    )
}
import { Fragment, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { changeFormValue, clearCart, clearFormValues, fetchOrder, setInitialOrderState } from "../actions/actionCreators"
import { Preloader } from "./Preloader"
import ReloadBtn from "./ReloadBtn"

export default function CartOrder() {

    const dispatch = useDispatch()
    const state = useSelector(state => state.orderFormReducer)
    const { items } = useSelector(state => state.cartReducer)
    const { loading, error, success } = useSelector(state => state.orderFetchReducer)
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()
        const newOrder = {
            owner: {
                phone: state.phone,
                address: state.address
            },
            items: items.map(item => ({
                id: item.id,
                price: item.price,
                count: item.count
            }))
        }
        dispatch(fetchOrder(newOrder))
    }

    const handleChange = (e) => {
        dispatch(changeFormValue(e.target.name, e.target.value))
    }

    if (loading) {
        return (
            <Preloader />
        )
    }

    if (error) {
        return (
            <Fragment> <p>{error}</p> <ReloadBtn setReload={handleSubmit}/></Fragment>
        )
    }

    if (success) {
        dispatch(clearFormValues())
        dispatch(clearCart())
        dispatch(setInitialOrderState())
        history.push('/')
    }

    return (
        <section className="order">
            <h2 className="text-center">Оформить заказ</h2>
            <div className="card">
                <form className="card-body" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="phone">Телефон</label>
                        <input name="phone" onChange={handleChange} value={state.phone} className="form-control" id="phone" placeholder="Ваш телефон" required />
                    </div>
                    <div className="form-group">
                        <label for="address">Адрес доставки</label>
                        <input name="address" onChange={handleChange} value={state.address} className="form-control" id="address" placeholder="Адрес доставки" required />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="agreement" required />
                        <label className="form-check-label" for="agreement">Согласен с правилами доставки</label>
                    </div>
                    <button type="submit" className="btn btn-outline-secondary" disabled={items.length === 0 ? true : false}>Оформить</button>
                </form>
            </div>
        </section>
    )
}
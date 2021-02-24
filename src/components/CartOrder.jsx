import { useDispatch, useSelector } from "react-redux"
import { changeFormValue, fetchOrder } from "../actions/actionCreators"

export default function CartOrder() {

    const dispatch = useDispatch()
    const state = useSelector(state => state.orderFormReducer)
    const { items } = useSelector(state => state.cartReducer)
    const { loading, error } = useSelector(state => state.orderFetchReducer)

    const handleSubmit = (e) => {
        e.preventDefault()
        const orderItems = items.map(item => JSON.parse(item[1]))
        const newOrder = {
            owner: {
                phone: state.phone,
                address: state.address
            },
            items: orderItems.map(item => ({
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

    return (
        <section className="order">
            <h2 className="text-center">Оформить заказ</h2>
            <div className="card" style={{ maxWidth: 30 + 'rem', margin: 0 + ' ' + 'auto' }}>
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
                    <button type="submit" className="btn btn-outline-secondary">Оформить</button>
                </form>
            </div>
        </section>
    )
}
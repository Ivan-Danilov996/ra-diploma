import { useDispatch, useSelector } from "react-redux"
import { removeItemFromCart } from "../actions/actionCreators"

export default function CartTable() {

    const { items } = useSelector(state => state.cartReducer)
    const dispatch = useDispatch()
    let sum = 0

    const handleClick = (key) => {
        dispatch(removeItemFromCart(key))
    }

    return (
        <section className="cart">
            <h2 className="text-center">Корзина</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Название</th>
                        <th scope="col">Размер</th>
                        <th scope="col">Кол-во</th>
                        <th scope="col">Стоимость</th>
                        <th scope="col">Итого</th>
                        <th scope="col">Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => {
                        const allPrice = item.price * item.count
                        sum += allPrice
                        return (
                            <tr key={item.key}>
                                <th scope="row">{index + 1}</th>
                                <td><a href="/products/1.html">{item.title}</a></td>
                                <td>{item.sizes}</td>
                                <td>{item.count}</td>
                                <td>{item.price}</td>
                                <td>{allPrice} руб.</td>
                                <td><button onClick={() => handleClick(item.key)} className="btn btn-outline-danger btn-sm">Удалить</button></td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td colSpan="5" className="text-right">Общая стоимость</td>
                        <td>{sum} руб.</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}
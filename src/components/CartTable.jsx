import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../actions/actionCreators"

export default function CartTable() {

    const { items } = useSelector(state => state.cartReducer)
    const dispatch = useDispatch()
    let sum = 0

    const handleClick = (key) => {
        localStorage.removeItem(key)
        dispatch(addToCart(Object.entries(localStorage)))
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
                    {items.map(([key, valueString], index) => {
                        const value = JSON.parse(valueString)
                        const allPrice = value.price * value.count
                        sum += allPrice
                        return (
                            <tr key={key}>
                                <th scope="row">{index + 1}</th>
                                <td><a href="/products/1.html">{value.title}</a></td>
                                <td>{value.sizes}</td>
                                <td>{value.count}</td>
                                <td>{value.price}</td>
                                <td>{allPrice} руб.</td>
                                <td><button onClick={() => handleClick(key)} className="btn btn-outline-danger btn-sm">Удалить</button></td>
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
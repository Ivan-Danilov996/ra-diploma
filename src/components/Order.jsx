import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    useHistory
} from "react-router-dom";
import { fetchItem, setCart } from "../actions/actionCreators";
import OrderImage from "./OrderImage";
import { Preloader } from "./Preloader";
import ReloadBtn from "./ReloadBtn";

export default function Order({ match }) {
    const history = useHistory();

    const { item, loading, error } = useSelector(state => state.itemReducer)
    const dispatch = useDispatch()
    const [selectedSize, setSelectedSize] = useState(null)
    const [count, setCount] = useState(1)
    const [reload, setReload] = useState(false)

    useEffect(() => {
        dispatch(fetchItem(match.params.id))
    }, [dispatch, reload])

    const handleClick = (size) => {
        console.log(size)
        setSelectedSize(size)
    }

    const handleDecrementClick = () => {
        if (count === 1) {
            return
        } else {
            const newCount = count - 1
            setCount(newCount)
        }
    }

    const handleIncrementClick = () => {
        if (count === 10) {
            return
        } else {
            const newCount = count + 1
            setCount(newCount)
        }
    }

    const handleButtonClick = (count, size) => {
        if (size) {
            const key = item.id.toString(10) + size.substr(0, 2)
            dispatch(setCart(key, size, count, item))
            history.push('/cart')
        }
    }

    if (loading) {
        return (
            <Preloader />
        )
    }

    if (error) {
        return (
            <Fragment>
            <p>{error}</p>
            <ReloadBtn setReload={setReload}/>
            </Fragment> 
        )
    }

    return (
        <Fragment>
            {item && <section className="catalog-item">
                <h2 className="text-center">{item.title}</h2>
                <div className="row">
                    <OrderImage imgSrc={item.images[0]}/>
                    <div className="col-7">
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td>Артикул</td>
                                    <td>{item.sku}</td>
                                </tr>
                                <tr>
                                    <td>Производитель</td>
                                    <td>{item.manufacturer}</td>
                                </tr>
                                <tr>
                                    <td>Цвет</td>
                                    <td>{item.color}</td>
                                </tr>
                                <tr>
                                    <td>Материалы</td>
                                    <td>{item.material}</td>
                                </tr>
                                <tr>
                                    <td>Сезон</td>
                                    <td>{item.season}</td>
                                </tr>
                                <tr>
                                    <td>Повод</td>
                                    <td>{item.reason}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="text-center">
                            <p>Размеры в наличии: {item.sizes.filter(element => element.avalible === true).map((size) => <span onClick={() => handleClick(size.size)} className={selectedSize === size.size ? "catalog-item-size selected" : "catalog-item-size"}>{size.size}</span>)} </p>
                            {item.sizes.length < 1 ? null : <p>Количество: <span className="btn-group btn-group-sm pl-2">
                                <button onClick={handleDecrementClick} className="btn btn-secondary">-</button>
                                <span className="btn btn-outline-primary">{count}</span>
                                <button onClick={handleIncrementClick} className="btn btn-secondary">+</button>
                            </span>
                            </p>
                            }
                        </div>
                        <button onClick={() => handleButtonClick(count, selectedSize)} className="btn btn-danger btn-block btn-lg">В корзину</button>
                    </div>
                </div>
            </section>}
        </Fragment>
    )
}
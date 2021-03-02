import {
    Link,
} from "react-router-dom";

export default function Product({images, title, price, id}) {
    return (
        <div className="col-4">
            <div className="card">
                <img src={images[0]}
                    className="card-img-top img-fluid" alt="Босоножки 'MYER'" />
                <div className="card-body">
                    <p className="card-text">{title}</p>
                    <p className="card-text">{price} руб.</p>
                    <Link to={`/catalog/${id}`} className="btn btn-outline-primary">Заказать</Link>
                </div>
            </div>
        </div>
    )
}
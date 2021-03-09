import { useState } from "react";
import {
    Link,
} from "react-router-dom";

export default function Product({images, title, price, id}) {

    const [img, setImg] = useState({
        src: images[0],
        error: false
    })
    
    const onError = () => {
        if (!img.error) {
            setImg(prevImg => ({...prevImg,
              src: 'https://populus.ru/wp-content/uploads/2019/11/no-image-500x500.jpg',
              error: true,
            }));
          }
    }

    return (
        <div className="col-4">
            <div className="card">
                <img src={img.src} onError={onError}
                    className="card-img-top img-fluid" alt={title} />
                <div className="card-body">
                    <p className="card-text">{title}</p>
                    <p className="card-text">{price} руб.</p>
                    <Link to={`/catalog/${id}`} className="btn btn-outline-primary">Заказать</Link>
                </div>
            </div>
        </div>
    )
}
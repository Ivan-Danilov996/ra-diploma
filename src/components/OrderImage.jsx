import { useState } from "react";

export default function OrderImage({ imgSrc }) {

    const [img, setImg] = useState({
        src: imgSrc,
        error: false
    })

    const onError = () => {
        if (!img.error) {
            setImg(prevImg => ({
                ...prevImg,
                src: 'https://populus.ru/wp-content/uploads/2019/11/no-image-500x500.jpg',
                error: true,
            }));
        }
    }

    return (
        <div className="col-5">
            <img src={img.src} onError={onError}
                className="img-fluid" alt="" />
        </div>
    )
}
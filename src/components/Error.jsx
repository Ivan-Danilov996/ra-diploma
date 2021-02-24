import { Fragment } from 'react'
import banner from '../img/banner.jpg'
import Footer from './homePage/footer/Footer'
import Header from './homePage/header/Header'
export default function Error() {
    return (
        <Fragment>
            <section class="top-sales">
                <h2 class="text-center">Страница не найдена</h2>
                <p>
                    Извините, такая страница не найдена!
                    </p>
            </section>
        </Fragment>
    )
}
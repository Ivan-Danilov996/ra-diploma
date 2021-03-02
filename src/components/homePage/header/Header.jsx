import headerLogo from '../../../img/header-logo.png'
import CartBlock from './CartBlock'
import Search from './Search'
import {
    Link,
    NavLink
  } from "react-router-dom";

export default function Header() {
    return (
        <header className="container">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-sm navbar-light bg-light">
                        <Link className="navbar-brand" to="/">
                            <img src={headerLogo} alt="Bosa Noga" />
                        </Link>

                        <div className="collapase navbar-collapse" id="navbarMain">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink exact activeClassName="active" className="nav-link" to="/">Главная</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="active" className="nav-link" to="/catalog">Каталог</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="active" className="nav-link" to="/about">О магазине</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="active" className="nav-link" to="/contacts">Контакты</NavLink>
                                </li>
                            </ul>
                            <div>
                                <div className="header-controls-pics">
                                    <Search />
                                    <CartBlock />
                                </div>
                            </div>
                        </div>
                    </nav>

                </div>
            </div>
        </header>
    )
}
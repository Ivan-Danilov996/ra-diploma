import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../actions/actionCreators"
import { Fragment, useEffect } from 'react'
import { NavLink, Link } from "react-router-dom";

export default function Categories({handleClick, categories, activeCategory}) {
    return (
        <ul className="catalog-categories nav justify-content-center">
            <li className="nav-item">
                <Link onClick={() => handleClick(11)} className={activeCategory === 11? "nav-link active":"nav-link"}>Все</Link>
            </li>
            {categories && categories.map(item => {
                return (
                    <li key={item.id} className="nav-item">
                        <Link onClick={() =>handleClick(item.id)} className={activeCategory === item.id? "nav-link active":"nav-link"}>{item.title}</Link>
                    </li>)
            })}
        </ul>
    )
}
import { Fragment } from "react";
import CartOrder from "./CartOrder";
import CartTable from "./CartTable";

export default function Cart() {
    return (
        <Fragment>
            <CartTable />
            <CartOrder />
        </Fragment>
    )
}
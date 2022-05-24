import React from "react"

import Navlogo from '../images/airbnb-logo.svg'

export default function Navbar() {
    return (
        <nav>
            <img src={Navlogo} className="nav--logo" />
        </nav>
    )
}
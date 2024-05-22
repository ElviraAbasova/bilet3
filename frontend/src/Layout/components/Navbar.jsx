import React from 'react'
import { Link } from 'react-router-dom'
import "../navbar.scss"

const Navbar = () => {
  return (
    <nav>
        <div className="container">
            <div className="logo">
                Tasty
            </div>
            <ul>
                <li>
                    <Link className="link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="link">Menu</Link>
                </li>
                <li>
                    <Link className="link" to="/wishlist">WishList</Link>
                </li>
                <li>
                    <Link className="link">Reservation</Link>
                </li>
                <li>
                    <Link className="link">Blog</Link>
                </li>
                <li>
                    <Link className="link">About</Link>
                </li>
                <li>
                    <Link className="link">Contact</Link>
                </li>
            </ul>

        </div>
    </nav>
  )
}

export default Navbar
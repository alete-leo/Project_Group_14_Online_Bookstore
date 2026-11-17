import React from "react";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">Bookstore</div>

            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="#books">Books</a></li>
                <li><a href="#genres">Genres</a></li>
                <li><a href="#signin">Sign In</a></li>
                <li><a href="#cart">Shopping Cart</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/testimonials">Testimonials</Link>
            </nav>
        </header>
    );
}

export default Navbar;
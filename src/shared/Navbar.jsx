import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const menuItem = [
    { name: 'Home', path: '/' },
    { name: 'Product', path: '/product' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact Us', path: '/contact-us' }
]

const Navbar = () => {

    const location = useLocation()
    return (
        <>
            <nav
                className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
                arial-label="Furni navigation bar"
            >
                <div className="container">
                    <a className="navbar-brand" href="index.html">
                        Unity Engineering<span>.</span>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarsFurni"
                        aria-controls="navbarsFurni"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsFurni">
                        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">

                            {
                                menuItem.map((item) => (
                                    <li className={`nav-item ${location.pathname == item.path ? 'active' : ''}`}>
                                        <Link to={item.path} className="nav-link">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar
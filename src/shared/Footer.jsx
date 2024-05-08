import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Footer = () => {

    const webDetails = useSelector(state=>state.webData.webData)
    return (
        <>
            <footer className="footer-section">
                <div className="container relative">
                    <div className="row g-5 mb-5">
                        <div className="col-lg-4">
                            <div className="mb-4 footer-logo-wrap">
                                <a href="#" className="footer-logo">
                                    Unity Engineering<span>.</span>
                                </a>
                            </div>
                            <p className="mb-4">
                                We are India's leading plastic processing and rubber processing machinery manufacturing company. We offer quality extrusion machinery and spare parts for a wide range of extrusion processes
                            </p>
                            <ul className="list-unstyled custom-social">
                                <li>
                                    <a href="#">
                                        <span className="fa fa-brands fa-facebook-f" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="fa fa-brands fa-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="fa fa-brands fa-instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="fa fa-brands fa-linkedin" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-8">
                            <div className="row links-wrap">
                                <div className="col-6 col-sm-6 col-md-3">
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link to='/about-us'>About us</Link>
                                        </li>
                                        <li>
                                            <Link to='/product'>Services</Link>
                                        </li>
                                        <li>
                                            <Link to=''>Blog</Link>
                                        </li>
                                        <li>
                                            <Link to='/contact-us'>Contact us</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-6 col-sm-6 col-md-3">
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link to='/careers'>Careers</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Our team</Link>
                                        </li>

                                        <li>
                                            <a href="#">Privacy Policy</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 col-sm-6 col-md-6">
                                    <ul className="list-unstyled">
                                        <li>
                                            <p>
                                                <i className="fa fa-phone-alt me-3" />
                                               {webDetails.contact_number}
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <i className="fa fa-envelope me-3" />
                                                {webDetails.email_id}
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <i className="fa fa-map-marker-alt me-3" />
                                                {webDetails.address}
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-top copyright">
                        <div className="row pt-4">
                            <div className="col-lg-6">
                                <p className="mb-2 text-center text-lg-start">
                                    Copyright ©Unity Engineering All Right Reserved
                                </p>
                                <p>
                                    <p>
                                        Designed By Shivam Chaturvedi (shivamchaturvedi000@gmail.com)
                                    </p>
                                </p>
                            </div>
                            <div className="col-lg-6 text-center text-lg-end">
                                <ul className="list-unstyled d-inline-flex ms-auto">
                                    <li className="me-4">
                                        <a href="#">Terms &amp; Conditions</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
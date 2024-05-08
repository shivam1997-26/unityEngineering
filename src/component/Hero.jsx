import React from 'react'

const Hero = (props) => {
    return (
        <>
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>{props.title}</h1>
                                <p className="mb-4">
                                   {props?.headline}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Hero
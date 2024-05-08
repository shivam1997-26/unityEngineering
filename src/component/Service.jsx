import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { apiUrl } from '../config/apiUrls'
import { getRequest } from '../config/httpRequest'

const Service = () => {
    const [productData, setProductData] = useState([])
    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = () => {

        const url = apiUrl.product.getAllProduct

        getRequest(url).then((item) => {
            setProductData(item.data.productData)
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <>
            <div className="untree_co-section product-section before-footer-section">
                <div className="container">
                    <div className="row">
                        {
                            productData?.map((item,id) => (
                                <div className="col-12 col-md-4 col-lg-3 mb-5" id={id*2}>
                                    <Link to={`/productDetails/${item.id}`} className="product-item">
                                        <img
                                            src={item.image}
                                            className="img-fluid product-thumbnail"
                                        />
                                        <h3 className="product-title">{item.productName}</h3>
                                        <p>{item.shortDescription}</p>
                                        <span className="icon-cross">
                                            <img src="images/cross.svg" className="img-fluid" />
                                        </span>
                                    </Link>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>


        </>
    )
}

export default Service
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { apiUrl } from '../config/apiUrls'
import { getRequest } from '../config/httpRequest'
import Hero from './Hero'

const Product = () => {
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
            <Hero title='Product' headline='Discover Our Premium Products Quality Craftsmanship for Every Need' />
            <div className="popular-product mt-5">
                <div className="container">
                    <div className="row">
                        {
                            productData?.map((item) => (

                                <div className="col-12 col-md-6 col-lg-4 mb-5 mt-5 mb-lg-0">
                                 
                                        <div className="product-item-sm d-flex">
                                            <div className="thumbnail">
                                                <img src={item.image} alt="Image" className="img-fluid" />
                                            </div>
                                            <div className="pt-3">
                                                <h3>{item.productName}</h3>
                                                <p>
                                                    {item.shortDescription}
                                                </p>
                                                <p>
                                                  
                                                    <Link to={`/productDetails/${item.id}`} className="product-item">Read More</Link>
                                                </p>
                                            </div>
                                        </div>
                                  
                                </div>

                            ))
                        }



                    </div>
                </div>
            </div>

        </>
    )
}

export default Product
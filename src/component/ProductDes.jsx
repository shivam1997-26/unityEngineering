
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiUrl } from '../config/apiUrls'
import { getRequest } from '../config/httpRequest'



const ProductDes = () => {

    const [productDes, setProductDes] = useState([])
    const { id } = useParams()

    useEffect(() => {
        getProductDetails();
    }, [])

    const getProductDetails = () => {

        const url = `${apiUrl.product.getProduct}/${id}`
        getRequest(url).then((data) => {
            if (data.data.status === 200) {
                setProductDes(data.data.productData)
            }

        })
    }

    return (
        <>
            <div className="container py-5 my-5">
                <div
                    className="text-center mx-auto"

                    style={{ maxWidth: 500 }}

                >
                    <h4 className='text-center'>
                        {productDes?.productName}
                    </h4>

                    <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
                </div>
                <div className='row'>

                    <div className='col-lg-7 col-md-7 col-sm-12'>
                        <span className=''>
                            {productDes.longDescription}
                        </span>

                    </div>
                    <div className='col-lg-5 col-md-5 col-sm-12'>
                        <img src={productDes.image} height='100%' />
                    </div>
                </div>
                <div className='row mt-5 mb-5'>

                    {productDes?.features?.length > 0 &&
                        (
                            <>
                                <h4 className='text-center mb-5'>Feature</h4>
                                <ul>
                                    {

                                        productDes.features.map((data) => {
                                            return (
                                                <li className='my-3'>
                                                    {data}
                                                </li>


                                            )
                                        })
                                    }
                                </ul>
                            </>
                        )
                    }

                </div>
            </div>
        </>
    )
}

export default ProductDes
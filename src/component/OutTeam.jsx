import React, { useEffect, useState } from 'react'
import { apiUrl } from '../config/apiUrls'
import { getRequest } from '../config/httpRequest'

const OutTeam = () => {

    const [ourTeam, setOurTeam] = useState([])

    useEffect(() => {
        getTeamDetails()
    }, [])

    const getTeamDetails = () => {
        const url = apiUrl.ourTeam.getTeam
        getRequest(url).then((item) => {
            if (item.data.resultData.length > 0) {
                setOurTeam(item.data.resultData)
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <>

            <div className="untree_co-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-5 mx-auto text-center">
                            <h2 className="section-title">Our Team</h2>
                        </div>
                    </div>
                    <div className="row">
                      
                        {
                            ourTeam.map((item) => (
                                <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
                                                    
                                    <img src={item.image} className="img-fluid mb-5 text-center rounded-circle " />
                                    <h4 className="">
                                        <a href="#">
                                            <span className="">{item.fullName}</span>
                                        </a>
                                    </h4>
                                    <span className="d-block position mb-4">{item.designation}, Unity Engineering</span>
                                    <p>
                                        {item.description}
                                    </p>
                                </div>
                            ))
                        }


                    </div>
                </div>
            </div>
        </>
    )
}

export default OutTeam
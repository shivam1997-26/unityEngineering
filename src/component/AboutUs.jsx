import React from 'react'
import Hero from './Hero'
import OutTeam from './OutTeam'

const AboutUs = () => {
    return (
        <>
            <Hero title='About Us' headline='Unveiling Our Story - Learn About Our Journey and Values' />

            <div className='container mt-5'>
                <p>
                    Welcome to the productive world of Unity Engineers Limited - a world where diverse range of extrusion machinery take shape with a complete solution in extrusion machinery to the customers. We are India's leading plastic processing and rubber processing machinery manufacturing company. We offer quality extrusion machinery and spare parts for a wide range of extrusion processes.
                </p>
                <p>
                    Unity Engineers Limited is an engineering company which is manufacturing, developing and inventing machineries for various type of applications in Extrusion Technology related plastic processing, Rubber Processing, Food Processing and polymers developing. Our range of extrusion machine includes co rotating twin screw extruder, single screw extruder, counter rotating twin screw extruder, automated pelletizing line, lump extrusion line, grinders, pulverizers, feeder units, screen changers, high speed mixers, dispersion kneader etc. for rubber and plastic processing, food processing industry. Other than these machines, we also offer single and multi-thread extrusion screws, barrels, barrier screws, grooved feed barrels, counter rotating twin screws and barrels, segmented screws and barrels like conveying and kneading elements and barrel segments, dispersion kneader’s rotter’s and chambers etc. We also provide all types screws for any application, any sphere or at any geometrical versions and custom designs.
                    We manufacture machines as per our client’s specific needs and their requirements. We don’t provide only machines for our customer’s need but we provide a complete solution to our customer’s.
                </p>

                <div className='row my-5'>
                    <h5 className='text-center mb-5'>Development and Research</h5>
                    <div className='col-lg-4 col-md-4 col-sm-12 mb-5'>
                        <img src='/images/research.jpg' height='100%' width='100%' />
                    </div>
                    <div className='col-lg-8 col-md-8 col-sm-12 ps-5'>
                        <p>
                            Our slogan “Developing Strong Trends” expresses our hunger for constant new research & developments in extrusion machinery technology. Our well-structured in-house designing unit always maintains an advanced thought process by their research which our production unit gives their best artistic hand to groom that thought process shine smoothly via our machines. We are not perfect but we are close to it and as long as there’s room for improvement, we will keep working on it.
                            Unity Engineers Limited mentor Mr. Vinod Tiwari is always looking for Strong Trends and research with unique and innovative technoly for machinery. He along with his team always thinks about Developing Strong Trends via continuous research. Focusing on intensive research processes, we bring optimum solutions to our client problems. We bound to the best business values, business ethics and thus we implement all these to our quality policies. On the basis of our research efforts, we always keep on improving quality and performance of our machines. Our continuous efforts towards this direction help us to gain client satisfaction and apperception from the customers.
                        </p>
                    </div>
                </div>
            </div>

            <OutTeam />
        </>
    )
}

export default AboutUs
import React from 'react';
import { useSelector } from 'react-redux';
import "swiper/css";
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import OutTeam from './OutTeam';
import Service from './Service';
import Vission_Mission from './Vission_Mission';
import WhyChooseUs from './WhyChooseUs';

const Main = () => {

    const webDetails = useSelector(state => state.webData.webData)
    return (
        <>
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5 col-12">
                            <div className="intro-excerpt">
                                <h1>
                                    Your Welcome In The <span clsas="d-block">Innovative World of Unity</span>
                                </h1>
                                <p className="mb-4">
                                    Where You Can Get All Extrusion Solution Under One Roof
                                </p>
                                <p>
                                    <a href="" className="btn btn-secondary me-2">
                                        Shop Now
                                    </a>
                                    <a href="#" className="btn btn-white-outline">
                                        Explore
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7 col-12">
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                effect={'fade'}
                                navigation={true}
                                modules={[EffectFade,Autoplay]}
                                className="mySwiper"
                            >

                                {
                                    webDetails?.website_banner?.map((item) => <SwiperSlide><img src={item} alt='banner' /></SwiperSlide>)
                                }

                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            <Service />
            <WhyChooseUs />
            <Vission_Mission />
            <OutTeam />

        </>
    )
}

export default Main
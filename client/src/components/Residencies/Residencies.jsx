import React from 'react';

// ** Styles
import "./Residencies.scss";

// ** Swiper
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

// ** Slider Settings
import { sliderSettings } from "../../utils/common";

// ** Hooks
import useProperties from '../../hooks/useProperties';

// ** Spinners
import { PuffLoader } from 'react-spinners'

// ** Components
import PropertyCard from '../PropertyCard/PropertyCard';

const Residencies = () => {
    const { data, isError, isLoading } = useProperties();


    // isError....
    if (isError) {
        return (
            <div className='wrapper'>
                <span>Error while fetching data</span>
            </div>
        )
    }

    // isLoading....
    if (isLoading) {
        return (
            <div className='wrapper flexCenter' style={{ height: "60vh" }}>
                <PuffLoader
                    height="80"
                    width="80"
                    radius={1}
                    color="#4066ff"
                    aria-label="puff-loading"
                />
            </div>
        )
    }



    return (
        <div id='residencies' className='r-wrapper'>
            <div className='paddings innerWidth r-container'>

                <div className='flexColStart r-head'>
                    <span className='orangeText'>برگزیده ها</span>
                    <span className='primaryText'>محبوب ترین ها</span>
                </div>

                <Swiper {...sliderSettings}>
                    <SlideNextButton />

                    {/* slider */}
                    {data.slice(0, 8).map((card, i) => (
                        <SwiperSlide key={i}>
                            <PropertyCard card={card} />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </div>
    );
};

export default Residencies;


// SliderNextButton Function
const SlideNextButton = () => {
    const swiper = useSwiper();
    return (
        <div className="flexCenter r-buttons">
            <button onClick={() => swiper.slidePrev()} className="r-prevButton">
                &lt;
            </button>
            <button onClick={() => swiper.slideNext()} className="r-nextButton">
                &gt;
            </button>
        </div>
    );
};
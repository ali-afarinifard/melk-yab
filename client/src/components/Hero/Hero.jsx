import React, { useEffect } from 'react';

// ** Styles
import "./Hero.scss";

// ** Motion
import { motion } from "framer-motion";

// ** CountUp
import CountUp from "react-countup";

// ** Components
import SearchBar from '../SearchBar/SearchBar';

// ** Toast
import { toast } from 'react-toastify'

const Hero = () => {

    useEffect(() => {
        { 
            toast('برای مشاهده موقعیت هر آگهی لطفا از VPN استفاده کنید', { position: 'top-center' }),
            toast('بعد از ثبت نام و ورود به سایت، پاپ آپ را از بالای پنجره مرورگر خود فعال کنید', { position: 'top-center' })
         }
    }, [])

    return (
        <section className='hero-wrapper'>
            <div className="paddings innerWidth flexCenter hero-container">



                {/* right side */}
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className='orange-circle' />
                        <motion.h1
                            initial={{ y: "2rem", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 2,
                                type: "ease-in",
                            }}
                        >
                            مناسب ترین <br /> ملک خود را <br /> پیدا کنید
                        </motion.h1>
                    </div>

                    <div className="flexColStart secondaryText flexhero-des">
                        <span>به راحتی انواع مختلفی از املاک ما را پیدا کنید</span>
                        <span>تمام مشکلاتی که در یافتن مکان مورد علاقه خود بودید فراموش کنید</span>
                    </div>

                    <SearchBar />

                    <div className='flexCenter stats'>

                        <div className='flexColCenter stat'>
                            <span>
                                <CountUp start={8800} end={9000} duration={4} /> <span>+</span>
                            </span>
                            <span className='secondaryText'>بهترین خدمات</span>
                        </div>

                        <div className='flexColCenter stat'>
                            <span>
                                <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
                            </span>
                            <span className='secondaryText'>رضایت مشتریان</span>
                        </div>

                        <div className='flexColCenter stat'>
                            <span>
                                <CountUp end={28} /> <span>+</span>
                            </span>
                            <span className='secondaryText'>تعداد جوایز</span>
                        </div>

                    </div>

                </div>


                {/* left side */}
                <div className='flexCenter hero-right'>
                    <motion.div className='image-container'
                        initial={{ x: "7rem", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 2,
                            type: "ease-in",
                        }}
                    >
                        <img src="./hero-image.png" alt="houses" />
                    </motion.div>
                </div>


            </div>
        </section>
    );
};

export default Hero
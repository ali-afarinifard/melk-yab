import React from 'react';

// ** Styles
import "./Footer.scss";

// ** Logo Image
import Logo from '../../../public/logo2.png';

const Footer = () => {
    return (
        <div className='f-wrapper'>
            <div className='paddings innerWidth flexCenter f-container'>

                {/* left side */}
                <div className='flexColStart f-left'>
                    <img src={Logo} alt="logo" width={120} />
                    <span className='secondaryText'>
                        چشم انداز ما ساختن همه مردم است
                        <br />
                        بهترین مکان برای زندگی مردم
                    </span>
                </div>

                {/* right side */}
                <div className='flexColStart f-right'>
                    <span className='primaryText'>دفاتر و شعب ما</span>
                    <div className='our-address'>
                        <span className='secondaryText'>تهران - سعادت آباد - خیابان مشاهیر</span>
                        <span className='secondaryText'>تهران - فرشته - خیابان ملاصدرا</span>
                    </div>
                    <div className='flexCenter f-menu'>
                        <span>ملک</span>
                        <span>خدمات</span>
                        <span>محصولات</span>
                        <span>درباره ما</span>
                    </div>
                </div>

            </div>

            <div className='f-bottom' dir='ltr'>
                Developed by Ali ❤️
            </div>
        </div>
    );
};

export default Footer;
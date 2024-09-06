import React from 'react';

// ** Styles
import "./GetStarted.scss";

const GetStarted = () => {
    return (
        <div id='get-started' className='g-wrapper'>
            <div className="paddings innerWidth g-container">
                <div className='flexColCenter inner-container'>
                    <span className="primaryText">ملک خود را در R~Estate پیدا کنید</span>
                    <span className="secondaryText">
                        برای اطلاع از بهترین قیمت های ملک، ما را دنبال کنید
                        <br />
                        به راحتی ملک خود را پیدا کنید
                    </span>
                    <button className="button">
                        <a href="mailto:a.afarinifard10@gmail.com">ما را دنبال کنید</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;
import React from 'react';

// ** Styles
import "./Contact.scss";

// ** React Icons
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';

const Contact = () => {
    return (
        <div id='contact-us' className='c-wrapper'>
            <div className='paddings innerWidth flexCenter c-container'>

                {/* left side */}
                <div className='flexColStart c-left'>

                    <span className='orangeText'>تماس با ما</span>
                    <span className='primaryText'>به راحتی با ما تماس بگیرید</span>
                    <span className="secondaryText">
                        ما همیشه آماده هستیم تا با ارائه بهترین خدمات به شما کمک کنیم. ما معتقدیم یک فضای خوب برای زندگی می تواند زندگی شما را بهتر کند
                    </span>

                    <div className='flexColStart contactModes'>

                        {/* first row */}
                        <div className='flexStart row'>

                            <div className='flexColCenter mode'>
                                <div className='flexStart'>

                                    <div className='flexCenter icon'>
                                        <MdCall size={25} />
                                    </div>

                                    <div className='flexColStart detail'>
                                        <span className="primaryText">دفتر - شعبه 1</span>
                                        <span className="secondaryText" dir='ltr'>021-123-145-14</span>
                                    </div>

                                </div>
                                <div className='flexCenter button'>تماس بگیرید</div>
                            </div>

                            <div className='flexColCenter mode'>
                                <div className='flexStart'>

                                    <div className='flexCenter icon'>
                                        <BsFillChatDotsFill size={25} />
                                    </div>

                                    <div className="flexColStart detail">
                                        <span className="primaryText">دفتر - شعبه 2</span>
                                        <span className="secondaryText" dir='ltr'>021-123-145-14</span>
                                    </div>

                                </div>
                                <div className='flexCenter button'>تماس بگیرید</div>
                            </div>

                        </div>


                        {/* second row */}
                        <div className='flexStart row'>

                            <div className='flexColCenter mode'>
                                <div className='flexStart'>

                                    <div className='flexCenter icon'>
                                        <BsFillChatDotsFill size={25} />
                                    </div>

                                    <div className='flexColStart detail'>
                                        <span className="primaryText">تماس تصویری</span>
                                        <span className="secondaryText">021-123-145-14</span>
                                    </div>

                                </div>
                                <div className='flexCenter button'>تماس بگیرید</div>
                            </div>

                            <div className='flexColCenter mode'>
                                <div className='flexStart'>

                                    <div className='flexCenter icon'>
                                        <HiChatBubbleBottomCenter size={25} />
                                    </div>

                                    <div className="flexColStart detail">
                                        <span className="primaryText">تلگرام</span>
                                        <span className="secondaryText">021-123-145-14</span>
                                    </div>

                                </div>
                                <div className="flexCenter button">پیام دهید</div>
                            </div>

                        </div>

                    </div>

                </div>

                {/* right side */}
                <div className='flexEnd c-right'>
                    <div className='image-container'>
                        <img src="./contact.jpg" alt="contact" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;
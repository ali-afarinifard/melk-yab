import React, { useState } from 'react';

// ** Styles
import "./Value.scss";

// ** Accessible Accordion React
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

// ** React Icons
import {
    MdOutlineArrowDropDown,
} from "react-icons/md";

// ** Utils
import data from "../../utils/accordion.jsx";

const Value = () => {
    return (
        <section id='value' className='v-wrapper'>
            <div className='paddings innerWidth flexCenter v-container'>

                {/* right side */}
                <div className='v-right'>
                    <div className='image-container'>
                        <img src="./value.png" alt="" />
                    </div>
                </div>

                {/* left side */}
                <div className='flexColStart v-left'>

                    <span className='orangeText'>خدمات ما</span>

                    <span className='primaryText'>خدماتی که ارائه میدیم</span>

                    <span className='secondaryText'>
                        ما همیشه آماده هستیم تا با ارائه بهترین خدمات به شما کمک کنیم.
                        <br />
                        ما معتقدیم یک مکان خوب برای زندگی می تواند زندگی شما را بهتر کند.
                    </span>


                    <Accordion
                        className='accordion'
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                    >
                        {data.map((item, i) => {
                            const [className, setClassName] = useState(null);
                            return (
                                <AccordionItem className={`accordionItem ${className}`} uuid={i} key={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='flexCenter accordionButton'>

                                            {/* just for getting state of item */}
                                            <AccordionItemState>
                                                {({ expanded }) =>
                                                    expanded
                                                        ? setClassName("expanded")
                                                        : setClassName("collapsed")
                                                }
                                            </AccordionItemState>
                                            <div className='flexCenter icon'>{item.icon}</div>
                                            <span className='primaryText'>{item.heading}</span>
                                            <div className='flexCenter icon'>
                                                <MdOutlineArrowDropDown size={20} />
                                            </div>

                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className='secondaryText'>{item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        })}

                    </Accordion>


                </div>

            </div>
        </section>
    );
};

export default Value;
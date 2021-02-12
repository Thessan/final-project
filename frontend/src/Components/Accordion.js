import React, { useState, useRef } from 'react'

import "../Styling/accordion.css";
import { Chevron } from './Chevron'

export function Accordion(props) {
    const [setActive, setActiveState] = useState("");

    // initial state is set to 0px to make sure the content is
    // hidden when the accordion components are rendered
    const [setHeight, setHeightState] = useState("0px"); 
    const [setRotate, setRotateState] = useState("accordion-icon");

    // This hook will create a reference to a DOM element and get data off it by accessing .current
    // I'm using useRef to identify scrollHeight in order to change the max-height of the content
    // within the accordion, which initially will be set to 0. Doing this will create an
    // animated expand/collapse effect for the accordian content
    const content = useRef(null);

    // what will happen when the accordion is clicked
    function toggleAccordion() {

        // will check if setActive is empty, and if it is it will change it to active
        setActiveState(setActive === "" ? "active" : "");
        
        // will check if setActive is equal to active and if it is the function will change setHeight to 0px
        // if it's already 0px it will change the value of the accordions content scrollHeight
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        );

        // when the button is clicked the Chevron icon will rotate
        setRotateState(
            setActive === "active" ? "accordion-icon" : "accordion-icon rotate"
        );
}

    return (
        <div className="accordion-section">
            <button className={`accordion-button ${setActive}`} onClick={toggleAccordion}>
                <p className="accordion-title">{props.title}</p>
                    <Chevron
                        className={`${setRotate}`}
                        width={10}
                        fill={"#777"}
                    />
            </button>
        
            <div 
                ref={content}
                className="accordion-content"
                style={{ maxHeight: `${setHeight}` }}>
            
            <div
                className="accordion-text"
                // the prop dangerouslySetInnerHTML makes it possible to use HTML within a string
                dangerouslySetInnerHTML={{ __html: props.content }}  
                />

            </div>
        </div>
);
}


import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { Sidebar } from './NavigationBar/Sidebar'
import { Navbar } from './NavigationBar/Navbar'
import { Accordion } from './Accordion'
import '../Styling/accordion.css'

export function FirstAccordion() {
    
    return (
        <>
        <Sidebar />
        <Navbar />
        <h1 className="h1-accordion">Pregnancy Week By Week</h1>
        <section className="accordion-background">
        <div className="accordion-wrapper">
        <div className="accordion-container-cne">
            <Accordion
            title="Week 1"
            content="If you’ve just found out you’re expecting, you might think this is your first week of pregnancy, but you’re probably around 4 weeks pregnant (yes, already!). Skip ahead and check out week 4 instead.
            In doctor speak, 1 week pregnant means you’re on your period and not yet pregnant. You won’t actually conceive your baby until week two or three, depending on the length of your cycle.
            "
            />

            <Accordion
            title="Week 2"
            content="At 2 weeks pregnant, you’re actually still not pregnant. However you may be close! By week two your period should be finished and you might start ovulating in the next few days. If you’re preparing to try to get pregnant, keep your eyes open for signs of ovulation and do that thing you do to get pregnant—have plenty of sex around the time you expect to ovulate."
            />
        
            <Accordion
            title="Week 3"
            content="Last week sperm met the egg, and voila—a baby was made! By three weeks it’s still so early that you may have no idea that you’re actually pregnant. Conception just happened a few days ago, and there probably hasn't been time for you to miss a period yet.
            "
            />

            <Accordion
            title="Week 4"
            content="If you know you're 4 weeks pregnant, you’ve found out the news earlier than a lot of women do probably because you took a test as soon as you missed your period. 

            At four weeks the baby is about the size of a poppy seed, practically microscopic. 
            "
            />

            <Accordion
            title="Week 5"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

            <Accordion
            title="Week 6"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

            <Accordion
            title="Week 7"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
        </div>

        <div className="accordion-container-two">
            <Accordion
            title="Week 8"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

            <Accordion
            title="Week 9"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

            <Accordion
            title="Week 10"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

            <Accordion
            title="Week 11"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

            <Accordion
            title="Week 12"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

            <Accordion
            title="Week 13"
            content="
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </br>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </br>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </br>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </br>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </br>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </br>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </br>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </br>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </br>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </br>"
            />
        </div>
        </div>
        </section>
        </>
    );
}

    const rootElement = document.getElementById("root");
    ReactDOM.render((
        <BrowserRouter>
            <FirstAccordion />
        </BrowserRouter>)
    , rootElement);
    
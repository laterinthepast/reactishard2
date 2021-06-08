import React from 'react';
import CardItem from './CardItem';
import './styles/Cards.scss';

function Cards() {
    return (
        <div className="cards" id="projects">
            <div className="cards__container">
                <div className="divider">
                    <img src="images/comp2.png" alt="" />
                </div>
                <h1>projects<span className="dots_title">.</span></h1>
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="/images/bry.png"
                            text="Bry is a talented tattoo artist based in Chippenham, UK. Follow the links below for source code and live website - React Project"
                            label="DESIGN, BUILD AND MANAGEMENT OF MELLERDRAMATIC.COM "
                            path="https://mellerdramatic.netlify.app"
                            pathgithub="https://github.com/laterinthepast/bry-react"
                        />
                         <CardItem
                            src="/images/eu.jpg"
                            text="DESIGN, BUILD - not published yet, awaiting client changes"
                            label="Simple React Website"
                            path="https://cocky-northcutt-9c570f.netlify.app/"
                            pathgithub="https://github.com/laterinthepast/quartz-website"
                        /> 
                        {/*
                        <CardItem
                            src="/images/herba.png"
                            text="Herbaroom - botanical prints. E-commerce website under construction"
                            label="Website under construction - online shop"
                            path="https://herbaroom.net/"
                            pathgithub="https://herbaroom.net/"
                        /> */}
                        
                    </ul>
                    <ul>
                        <h1>More to come...</h1>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards

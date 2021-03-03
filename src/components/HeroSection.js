import React from 'react';

import './styles/HeroSection.scss';
import '../App.scss';

/* Animation JS */
let hello = [
    "hello",
    "cześć",
    "hallo",
    "ciao",
    "olá",
    "bonjour",
    "namaste",
    "salaam",
    "ohayo",
    "merhaba",
    "szia",
    "jambo",
    "nay hoh",

];
let i = 0;
setInterval(function () {
    document.getElementById("random").innerHTML = hello[i];
    if (i === (hello.length - 1)) {
        i = 0;
    } else {
        i++;
    }
}, 2000);
/* end of animation */

function HeroSection() {
    return (
        <div className='hero-container' id="welcome">
            <h1><span id="random"></span></h1>
            <p>i'm rafal.</p>
        </div>
    )
}

export default HeroSection

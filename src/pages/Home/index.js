import React, { useState } from 'react';
import backgroundImage from '../../images/sydney-angove-Gqe9_JlU8ks-unsplash.jpg';
import cammiImageOne from '../../images/cammiOne.jpg'
import cammiImageTwo from '../../images/cammiTwo.jpg'
import cammiImageThree from '../../images/cammiThree.jpg';
import homepage from '../../images/homepage.webp';
import homepagetwo from '../../images/homepageTwo.webp';

import './home.css'


import { Parallax } from 'react-parallax';

// importing component

function Home() {
    return (
        <div className='home_container backgroundColor'>
            <section>
                <Parallax bgImage={cammiImageThree} strength={200}>
                    <div className="parallax-content"></div>
                </Parallax>
            </section>
            <section>
                <div className="title_section">
                    <h2>This could be something about bread or whatever</h2>
                </div>
                <div></div>
            </section>
        </div>
    );
}

export default Home;
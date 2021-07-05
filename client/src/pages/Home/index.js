import React, {useState} from 'react';
import backgroundImage from '../../images/sydney-angove-Gqe9_JlU8ks-unsplash.jpg';
import cammiImageOne from '../../images/cammiOne.jpg'
import cammiImageTwo from '../../images/cammiTwo.jpg'
import cammiImageThree from '../../images/cammiThree.jpg';
import homepage from '../../images/homepage.webp';
import homepagetwo from '../../images/homepageTwo.webp';


import { Parallax } from 'react-parallax';

// importing component

function Home() {
    return(
        <div className='homeContainer backgroundColor'>
            <section>
                <Parallax bgImage={homepagetwo} strength={200}>
                    <div className="parallax-content">some text inside the parallax</div>
                </Parallax>
                {/* <img src={backgroundImage} className="homepageBackgroundImg"></img> */}
            </section>
            <section>
                <div>This could be some blog posts?</div>
                <div></div>
            </section>
        </div>
    );
}

export default Home;
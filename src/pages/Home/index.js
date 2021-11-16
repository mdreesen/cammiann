import React, { useState } from 'react';
import backgroundImage from '../../images/sydney-angove-Gqe9_JlU8ks-unsplash.jpg';
import cammiImageOne from '../../images/cammiOne.jpg'
import cammiImageTwo from '../../images/cammiTwo.jpg'
import cammiImageThree from '../../images/cammiThree.jpg';
import homepage from '../../images/homepage.webp';
import homepagetwo from '../../images/homepageTwo.webp';

import './home.css'
import data from '../../utils/data.json';


import { Parallax } from 'react-parallax';

const Home = () => {

    const HomeData = () => {
        return data?.home?.map((t, index) => {
            return t.title
        })
    }


    return (
        <div className='home_container backgroundColor'>
            <section>
                <Parallax bgImage={cammiImageThree} strength={200}>
                    <div className="parallax-content"></div>
                </Parallax>
                <div className="home_title_container">
                    {
                        data?.home?.map((t, index) => {
                            const assetSwitch = index % 2 === 0 ? 'left' : 'right';
                            const colorSwitch = index % 2 === 0 ? 'title_color_background' : 'title_white_background';

                            return (
                                <div className={colorSwitch}>
                                    <div className={`asset_${assetSwitch}`}></div>
                                    <div className="text_container">
                                        <div className="title">{t.title}</div>
                                        <p>{t.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    );
}

export default Home;
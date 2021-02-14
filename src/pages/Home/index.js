import React from 'react';
import backgroundImage from '../../images/sydney-angove-Gqe9_JlU8ks-unsplash.jpg';

function Home() {
    return(
        <div className='homeContainer'>
            <section>
                <img src={backgroundImage} className="homepageBackgroundImg"></img>
            </section>
            <section>
                <div>This could be some blog posts?</div>
            </section>
        </div>
    );
}

export default Home;
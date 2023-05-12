// import React from 'react'
import Myslider from './Myslider';


export const About = () => {
    return <div>
        <section id="featured" className="banner">
            <div className="wrapper">
                <div className="blurb">
                    <h2><strong>Ut enim</strong> ad minim</h2>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                </div>
                <div className="featured"><img src="/img/featured.jpg" alt="Featured" /></div>
            </div>
        </section>

        <Myslider />
    </div>
}
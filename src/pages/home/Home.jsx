import React from 'react';
import Hero from '../../components/hero/Hero';
import Stats from '../../components/stats/Stats';
import PracticeAreas from '../../components/practiceareas/PracticeAreas';
import Attorneys from '../../components/attorneys/Attorneys';
// import News from '../../components/News';
// import Prizes from '../../components/Prizes';
// import Footer from '../../components/Footer';
import CTA from '../../components/cta/CTA';
import Footer from '../../components/footer/Footer';
import BlogList from '../../components/bloglist/BlogList';

const Home = () => {
    return (
        <div>
            <Hero />
            <Stats />
            <PracticeAreas/>
            <Attorneys/>
            <CTA/>
            <BlogList/>
            {/* <News />
            <Prizes />
            <Footer /> */}
        </div>
    );
};

export default Home;
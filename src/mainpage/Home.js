import React from 'react';
import Header from '../header/Header';
import SectionClothes from './SectionClothes';
import SectionContent from './SectionContent';
import FamousSection from './FamousSection';
import SectionYouTube from './SectionYouTube';
import SectionSuit from './SectionSuit';
import LookbookSection from './SectionLookBook';
import Footer from '../footer/Footer';
function Home(props) {
    return (
        <div className='container-page'>
            <Header></Header>
            <SectionContent></SectionContent>
            <SectionClothes></SectionClothes>
            <FamousSection></FamousSection>
            <SectionSuit></SectionSuit>
            <SectionYouTube></SectionYouTube>
            <LookbookSection></LookbookSection>
            <Footer></Footer>
        </div>
    );
}

export default Home;
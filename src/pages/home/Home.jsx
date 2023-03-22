import React from 'react';
import Banner from '../../components/banner/Banner.jsx';
import TVSection from '../../components/cards/TVSection.jsx';
import Trending from '../trending/Trending.jsx';

function Home() {
  return (
    <div>
    <Banner/>
    <Trending/>
    <TVSection/>
    
    </div>
  )
}

export default Home
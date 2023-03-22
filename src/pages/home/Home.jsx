import React from 'react';
import Banner from '../../components/banner/Banner.jsx';
import TVSection from '../../components/cards/TVSection.jsx';
import Movies from '../Movies/Movies.jsx';

function Home() {
  return (
    <div>
    <Banner/>
    <Movies/>
    <TVSection/>
    
    </div>
  )
}

export default Home
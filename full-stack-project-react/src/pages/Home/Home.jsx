import React from 'react'
import HeroContainer from '../../components/HeroContainer/HeroContainer';
import LocationList from '../../components/LocationList/LocationList';
import "./Home.scss";

const Home = () => {
  return (
    <main>
      <HeroContainer />
      <LocationList />
    </main>
    
   )
}

export default Home
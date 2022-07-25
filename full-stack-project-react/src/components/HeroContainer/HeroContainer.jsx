import React, { useState } from "react";
import HeroSlide from "./HeroSlide";

const HeroContainer = () => {
  const slides = [
    {
      title: "Discover Argentina",
      subtitle:
        "Beautiful, defiant and intense, Argentina seduces with its streetside tango, wafting grills, football, gaucho culture and the mighty Andes. It's one formidable cocktail of wanderlust.",
      img:"https://images.pexels.com/photos/5812847/pexels-photo-5812847.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      id:1
    },
    {
      title: "Explore the activities that Argentina has in store for you",
      subtitle:
        "Visitors can enjoy the awe-inspiring views of the falls along with tours, treks, and water sports at the falls' base..",
      img:"https://images.pexels.com/photos/4916562/pexels-photo-4916562.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      id:2  
    },
    {
      title: "Main attractions include spectacular glaciers.",
      subtitle:
        "Argentina has distinct and beautiful geography, interesting history and culture, thriving nightlife, and unique local cuisine.",
      img:"https://images.pexels.com/photos/776938/pexels-photo-776938.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      id:3
    },
  ];

  const [index, setIndex] = useState(0);

  const changeSlide = (i) => {
    setIndex( i );
  }

  return <HeroSlide 
            slide={slides[index]}     
            changeSlide={changeSlide} 
            arrayIndex={slides.map(el=> el.id)}/>;
};

export default HeroContainer;

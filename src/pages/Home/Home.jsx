import React from "react";

// IMPORT LOGO
import circus from '../../assets/images/circus.png'
import SlideshowComponent from "../../components/SlideshowComponent/SlideshowComponent";
import OurTeamComponent from "../../components/OurTeamComponent/OurTeamComponent";
import LastWorkComponent from "../../components/LastWorkComponent/LastWorkComponent";
import TestimonialsComponent from "../../components/TestimonialsComponent/TestimonialsComponent";

const Home = () => {
  return (
    <>
    <SlideshowComponent></SlideshowComponent>
    <OurTeamComponent></OurTeamComponent>
    <TestimonialsComponent></TestimonialsComponent>
    <LastWorkComponent></LastWorkComponent>
    </>
  )
};

export default Home;

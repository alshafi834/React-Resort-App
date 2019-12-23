import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import RoomsContainer from "../components/RoomsContainer";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Our Rooms">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
      <Footer></Footer>
    </>
  );
};

export default Rooms;

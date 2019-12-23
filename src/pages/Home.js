import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRoom from "../components/FeaturedRoom";
import Footer from "../components/Footer";

export default function() {
  return (
    <>
      <Hero>
        <Banner
          title="Luxurious rooms"
          subtitle="Deluxe rooms starting at €255"
        >
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRoom></FeaturedRoom>
      <Footer></Footer>
    </>
  );
}

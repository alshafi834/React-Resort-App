import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }

  static contextType = RoomContext;
  //componentDidMount(){}
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>No such room could found</h3>
          <Link to="/rooms" className="btn-primary">
            Back to Rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      price,
      size,
      extras,
      breakfast,
      pets,
      images
    } = room;

    const [mainImg, ...otherImgs] = images;
    return (
      <>
        <StyledHero img={images[0]}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {otherImgs.map((item, index) => {
              return <img key={index} src={item} alt="room images" />;
            })}
          </div>
          <div className="single-room-info">
            <article className="description">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>Price: ${price}</h6>
              <h6>Size: ${size} sqm</h6>
              <h6>
                Max Capacity:{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}{" "}
              </h6>
              <h6>{pets ? "Pets allowed" : "No pets allowed"}</h6>
              <h6>{breakfast && "Free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>
        </section>
        <Footer></Footer>
      </>
    );
  }
}

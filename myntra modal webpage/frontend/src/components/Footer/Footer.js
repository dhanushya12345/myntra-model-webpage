/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-duplicates */
/* eslint-disable prettier/prettier */
import React from "react";
import { Jumbotron, Container } from "reactstrap";
import { Row, Col } from "reactstrap";
import "./footer.css";
import { Badge } from "react-bootstrap";
import facebooklogo from "./images/facebook-logo.jpg"
import twitter from "./images/twitter-black-shape.png"
import youtube from './images/youtube.png';
import insta from './images/instagram.jpg';
import original from './images/original.jpg';
import truck from './images/shipping.png';

// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class="container-fluid">
        <Jumbotron fluid>
         
            <Row>
              <Col XS lg="1" />
              <Col XS lg="2">
                <ul className="list-unstyled">
                  <p>
                    <b>ONLINE SHOPPING</b>
                  </p>
                  <li>
                    <a href="#men">Men</a>
                  </li>
                  <li>
                    <a href="#women">Women</a>
                  </li>
                  <li>
                    <a href="#kids">Kids</a>
                  </li>
                  <li>
                    <a href="#home&living">Home & Living</a>
                  </li>
                  <li>
                    <a href="#discover">Discover</a>
                  </li>
                  <li>
                    <a href="#gift cards">Gift Cards</a>
                  </li>
                  <li>
                    <a href="#insider">
                    Insider<Badge variant="danger">New</Badge>
                    </a>
                  </li>
                </ul>
              </Col>
              <Col XS lg="2">
                <ul className="list-unstyled">
                  <p>
                    <b>USEFUL LINKS</b>
                  </p>
                  <li>
                    <a href="#contact us">Contact Us</a>
                  </li>
                  <li>
                    <a href="#faq">FAQ</a>
                  </li>
                  <li>
                    <a href="#t&c">T & C</a>
                  </li>
                  <li>
                    <a href="#terms">Terms Of Use</a>
                  </li>
                  <li>
                    <a href="#track">Track Orders</a>
                  </li>
                  <li>
                    <a href="#shipping">Shipping</a>
                  </li>
                  <li>
                    <a href="#cancellation">Cancellation</a>
                  </li>
                  <li>
                    <a href="#returns">Returns</a>
                  </li>
                  <li>
                    <a href="#whitehad">Whitehad</a>
                  </li>
                  <li>
                    <a href="#blog">Blog</a>
                  </li>
                  <li>
                    <a href="#careers">Careers</a>
                  </li>
                  <li>
                    <a href="#privacy">Privacy policy</a>
                  </li>
                </ul>
              </Col>
              <Col XS lg="3">
                <ul className="list-unstyled">
                  <p>
                    <b>EXPERIENCE  APP ON MOBILE</b>
                  </p>
                  <li>
                    <img
                      className="play"
                      alt="google play"
                      src="https://assets.myntassets.com/assets/images/retaillabs/2018/10/16/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
                    />
                    <img
                      className="ios"
                      alt="ios"
                      src="https://assets.myntassets.com/assets/images/retaillabs/2018/10/16/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
                    />
                  </li>
                  <p>
                    <b>KEEP IN TOUCH</b>
                  </p>
                  <li>
                    <img className="icon" src={facebooklogo} />
                    <img className="icon" src={twitter} />
                    <img className="icon" src={youtube} />
                    <img className="icon" src={insta} />
                  </li>
                </ul>
              </Col>
              <Col XS lg="3">
                <ul className="list-unstyled">
                  <li>
                    <strong>
                      <img src={original} className="icon" />
                      100% ORIGINAL
                    </strong>
                    guarantee for all products 
                  </li>
                  <li>
                    <strong>
                      <img
                        className="icon"
                        src="https://image.shutterstock.com/z/stock-vector-silhouette-flat-icon-simple-vector-design-with-shadow-round-with-arrow-and-symbol-for-store-525211132.jpg"
                      />
                      Return within 30days{' '}
                    </strong>
                    of receiving your order
                  </li>
                  <li>
                    <strong><img src={truck} className="icon"/>Get free delivery </strong>for every order above
                    Rs.1199
                  </li>
                </ul>
              </Col>
              <Col XS lg="1" />
            </Row>
         
        </Jumbotron>
      </div>
    );
  }
}
export default Footer;

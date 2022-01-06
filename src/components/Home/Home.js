import React, { useEffect, useState } from 'react';
import { Card, Carousel, Col, Row, Spinner } from 'react-bootstrap';
import banner1 from '../../image/banner/rsz_goaseabeach.jpg'
import banner2 from '../../image/banner/rsz_steven-lasry-_25mtanrow4-unsplash.jpg'
import banner3 from '../../image/banner/topclassResort.jpg'
import LoadCard from '../LoadCard/LoadCard';
import './Home.css'
import HomePackage from './HomePakcage/HomePackage';
import './Home.css'

const Home = () => {
    const [packages, setPackages]=useState([]);
    const [spin, setSpin]=useState(true);
    useEffect(()=>{
        fetch('https://peaceful-sierra-90346.herokuapp.com/packages')
        .then(res=>res.json())
        .then(data=>setPackages(data))
    },[])
    const totalCard=[...packages];
    totalCard.length=8;
    return (
        <div>
            {/* slider banner  */}

          <div className="banner">
          <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Enjoy beach sunset</h3>
      <p>INDIA HOLIDAY DESTINATIONS10 Places To Enjoy Spectacular Views Of Sunset In Goa</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Shikara ride at Dal Lake.</h3>
      <p>Cool off in the mesmerising Betaab Valley, enjoy the breeze by the Dal Lake  more. Book holiday packages </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>hotel deals on Beauty Garden Resort</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
          </div>
            {/* banner slider end */}
            <div className="home-packages">
            <Row xs={1} md={2} lg={4} className="g-4">
               {packages.length===0?<div className="spinner">
                <Spinner animation="border" variant="info" />
               </div>
                :
                  totalCard.map(tourPackage=><Col
                    key={tourPackage._id}
                    >
                    <HomePackage
                    key={tourPackage._id}
                    tourPackage={tourPackage}
                    ></HomePackage> </Col>)
                }
              </Row>
            </div>
            <div className="transport">
              <h2 className="hed">Recomanded TRANSPORT </h2>
    <Row xs={1} md={2} lg={3} className="g-4">
    <Col>
      <Card>
        <Card.Img variant="top" src="https://i.ibb.co/GtcX3RG/cars.jpg" />
        <Card.Body>
          <Card.Title>Cars<a href='#'>Cars</a></Card.Title>
        </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card>
        <Card.Img variant="top" src="https://i.ibb.co/DLYQWjK/tempo-traveller.jpg" />
        <Card.Body>
          <Card.Title><a href='#'>Mini Coach</a></Card.Title>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src="https://i.ibb.co/VHLSZMg/luxury-bus.jpg" />
        <Card.Body>
          <Card.Title><a href='#'>Luxury Coach</a></Card.Title>
        </Card.Body>
      </Card>
    </Col>
</Row>
</div>
      <div className="transport">
        <h2 className="hed">Top class hotels and resorts</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
    <Col>
      <Card>
        <Card.Img variant="top" src="https://i.ibb.co/8m5ZwpD/Luxury-Spa-Resorts-in-Himalayan-Range-300x169.jpg" />
        <Card.Body>
          <Card.Title><a href='Top 10 Spa Destinations in the Himalayan Range of India'>Top 10 Spa Destinations in the Himalayan Range of India</a></Card.Title>
        </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card>
        <Card.Img variant="top" src="https://i.ibb.co/wNkX94R/hotels-to-stay-in-sikkim-300x169.png" />
        <Card.Body>
          <Card.Title><a href='#'>15 Hotels to Stay in Sikkim by Destinations</a></Card.Title>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src="https://i.ibb.co/gZ3hbR2/Untitled-design-8-1-300x169.png" />
        <Card.Body>
          <Card.Title><a href='#'>15 Best Honeymoon Resorts in Shimla</a></Card.Title>
        </Card.Body>
      </Card>
    </Col>
</Row>

      </div>
        </div>
    );
};

export default Home;
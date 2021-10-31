import React, { useEffect, useState } from 'react';
import { Carousel, Col, Row, Spinner } from 'react-bootstrap';
import banner1 from '../../image/banner/rsz_goaseabeach.jpg'
import banner2 from '../../image/banner/rsz_steven-lasry-_25mtanrow4-unsplash.jpg'
import banner3 from '../../image/banner/topclassResort.jpg'
import LoadCard from '../LoadCard/LoadCard';
import './Home.css'
import HomePackage from './HomePakcage/HomePackage';

const Home = () => {
    const [packages, setPackages]=useState([]);
    const [spin, setSpin]=useState(true);
    useEffect(()=>{
        fetch('https://peaceful-sierra-90346.herokuapp.com/packages')
        .then(res=>res.json())
        .then(data=>setPackages(data))
    },[])
    const totalCard=[1,2,3,4,5,6];
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
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
          </div>
            {/* banner slider end */}
            <div className="home-packages">
            <Row xs={1} md={2} lg={4} className="g-4">
                { packages.length===0?totalCard.map(num=><Col
                key={num}
                >
                <LoadCard></LoadCard></Col>)
                
                  :
                    packages.map(tourPackage=><Col
                    key={tourPackage._id}
                    >
                    <HomePackage
                    key={tourPackage._id}
                    tourPackage={tourPackage}
                    ></HomePackage> </Col>)
                }
              </Row>
            </div>
        </div>
    );
};

export default Home;
import React, { useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import LoadCard from '../LoadCard/LoadCard';
import SinglePackage from './SinglePackage/SinglePackage';

const Packages = () => {
    const [allPackage, setAllPackage]=useState([]);
    useState(()=>{
        fetch('https://peaceful-sierra-90346.herokuapp.com/packages')
        .then(res=>res.json())
        .then(data=>setAllPackage(data))
    },[])
    return (
        <div>
            <h2>All India Tour Package For You</h2>            <div className="package-container">
                {
                          <Row xs={1} md={2} lg={4} className="g-4">
                          { allPackage.length===0?<Spinner animation="border" variant="info" />
                          
                            :
                              allPackage.map(tourPackage=><Col
                              key={tourPackage._id}
                              >
                            <SinglePackage
                            key={tourPackage._id}
                            tourPackage={tourPackage}
                            
                            ></SinglePackage>
                              </Col>)
                          }
                        </Row>
                }
            </div>

        </div>
    );
};

export default Packages;
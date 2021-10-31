import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './MyBooking.css'
const MyBooking = () => {
    const [myBooking, setMyBooking]=useState([]);
    const {user}=useAuth();
    useEffect(()=>{
        fetch('https://peaceful-sierra-90346.herokuapp.com/booking')
        .then(res=>res.json())
        .then(data=>setMyBooking(data));
    },[])
    let mykey=[];
    const filterData=myBooking.filter(booking=>booking.email==user.email);
    console.log(mykey)
    return (
        <div>
           {
               myBooking.length===0?<div className="spinner">
                   <Spinner animation="border" variant="info" />
               </div>
               :
               filterData.map(data=><div className="my-booking">
                   <h2>{data.email}</h2>
                   <h3>{data._id}</h3>
                   </div>
                   )
           }
        </div>
    );
};

export default MyBooking;
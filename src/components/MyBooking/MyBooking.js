import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
const MyBooking = () => {
    const [myBooking, setMyBooking]=useState([]);
    const {user}=useAuth();
    useEffect(()=>{
        fetch('http://localhost:5000/booking')
        .then(res=>res.json())
        .then(data=>setMyBooking(data));
    },[])
    let mykey=[];
    const filterData=myBooking.filter(booking=>booking.email==user.email);
    console.log(mykey)
    return (
        <div>
           {
               filterData.map(data=><div>
                   <h2>{data.email}</h2>
                   <h3>{data._id}</h3>
                   </div>
                   )
           }
        </div>
    );
};

export default MyBooking;
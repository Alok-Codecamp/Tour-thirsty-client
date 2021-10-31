import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import useLocalStore from '../../hooks/useLocalStore';
import './MyBooking.css'
const MyBooking = () => {
    const [myBooking, setMyBooking]=useState([]);
    const [allbooking, setAllBooking]=useState([])
    const [remainingPack, setRemainingPack]=useState([]);
    const {removeFromLocal}=useLocalStore();
    const {user}=useAuth();
    useEffect(()=>{
        fetch('https://peaceful-sierra-90346.herokuapp.com/booking')
        .then(res=>res.json())
        .then(data=>setMyBooking(data));
    },[])
        useEffect(()=>{
            fetch('https://peaceful-sierra-90346.herokuapp.com/packages')
            .then(res=>res.json())
            .then(data=>setAllBooking(data));
        },[])

    let mykey=[];
  
    const filterData=myBooking.filter(booking=>booking.email==user.email);
    const myIds=filterData.map(obj=>obj.id);
    console.log(myIds)
    for(const id of myIds){
        console.log(id)
       const mydata=allbooking.filter(fl=>fl._id==id);
       mykey.push(mydata[0]);
    }
    
    console.log(mykey);

    // delete operation 
    const handledeleteMyBooking=(id)=>{
        // console.log(id)
        alert('confirm delete booking')
        removeFromLocal(id)
        const url=`https://peaceful-sierra-90346.herokuapp.com/packages/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{console.log(data)
            if(data.deletedCount>0){
               alert('deleted successfully');
               
            }
        })

    }
    return (
        <div className="">
           {
               myBooking.length===0&&<div className="spinner">
                   <Spinner animation="border" variant="info" />
               </div>
           }

           <div className="booking-item mt-5 mb-5">
               {
                   mykey.map(pack=>pack?.image&&<div 
                   className="mb-4 bg-info d-flex justify-content-center align-items-center">

                       <img src={pack?.image} alt="" />
                       <div className="ms-4">
                       <h3>{pack?.package_name}</h3>
                       <p>Duration: {pack?.Duration}</p>
                       <p>{user?.email}</p>
                       <button onClick={()=>handledeleteMyBooking(pack._id)} >cancle Booking</button>
                       </div>
                   </div>)
               }
           </div>
        </div>
    );
};

export default MyBooking;
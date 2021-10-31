import React, { useEffect, useState } from 'react';
import useLocalStore from '../../hooks/useLocalStore';
import './ManageBookings.css'

const ManageBookings = () => {
    const [booking,setBooking]=useState([]);
    const {getBooking,removeFromLocal}=useLocalStore();
    useEffect(()=>{
        fetch('https://peaceful-sierra-90346.herokuapp.com/packages')
        .then(res=>res.json())
        .then(data=>setBooking(data));
    },[])
    // console.log(booking)
    const filterBooking=[];

        const savedBooking=getBooking();
        const store=Object.keys(savedBooking);
        // console.log(store)
        for(const key of store){
            console.log(key)
            const allBooking=booking.find(item=>item._id==key)
            filterBooking.push(allBooking)
        }
        // console.log(manageBooking)
        const handleDelete=(id)=>{
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
                    const remainingUsers=booking.filter(b=>b._id!==id)
                    setBooking(remainingUsers)

                }
            })
    
        }
        const handleAprove=()=>{
            
        }
    
    return (
        <div>
            {
                filterBooking.map(b=><div>
                    <div className="information container d-flex
                    flex-lg-row flex-sm-column justify-content-center align-items-center
                    ">
                    <div className="all-package d-lg-flex justify-content-center align-items-center">
                        <img src={b?.image} alt="" />
                        <div className="innerText ms-4 text-start">
                        <h2>{b?.package_name}</h2>
                        <p> Duration:{b?.Duration}</p>
                        <p>price: {b?.Price}</p>
                        <p className="d-sm-none d-lg-block  w-75">{b?.description}</p>
                        </div>
                    </div>
                    <button className="me-lg-4" onClick={handleAprove}>Aprove</button>
                    <button onClick={()=>handleDelete(b._id)}>Cancel booking</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageBookings;
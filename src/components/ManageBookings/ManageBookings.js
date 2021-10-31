import React, { useEffect, useState } from 'react';
import useLocalStore from '../../hooks/useLocalStore';
import './ManageBookings.css'

const ManageBookings = () => {
    const [booking,setBooking]=useState([]);
    const {getBooking}=useLocalStore();
    useEffect(()=>{
        fetch('https://peaceful-sierra-90346.herokuapp.com/packages')
        .then(res=>res.json())
        .then(data=>setBooking(data));
    },[])
    // console.log(booking)
    const filterBooking=[];

        const savedBooking=getBooking();
        const store=Object.keys(savedBooking);
        console.log(store)
        for(const key of store){
            const allBooking=booking.find(b=>b._id==key)
            filterBooking.push(allBooking)
        }
        // console.log(manageBooking)
        const handleDelete=(id)=>{
            // console.log(id)
            alert('confirm delete booking')
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
    
    return (
        <div>
            {
                filterBooking.map(b=><div>
                    <div className="information d-flex
                    flex-lg-row flex-sm-column justify-content-center align-items-center
                    ">
                    {b?.package_name}
                    <button onClick={()=>handleDelete(b._id)}>Cancel booking</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageBookings;
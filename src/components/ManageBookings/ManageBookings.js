import React, { useEffect, useState } from 'react';
import useLocalStore from '../../hooks/useLocalStore';

const ManageBookings = () => {
    const [booking,setBooking]=useState([]);
    const {getBooking}=useLocalStore();
    useEffect(()=>{
        fetch('http://localhost:5000/packages')
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
            console.log(id)
            const url=`http://localhost:5000/packages/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{console.log(data)
                // if(data.deletedCount>0){
                //     const remainingUsers=manageBooking.filter(b=>b._id!==id)
                //     setManageBooking(remainingUsers)

                // }
            })
    
        }
    
    return (
        <div>
            {
                filterBooking.map(b=><div>{b?.package_name}
                    <button onClick={()=>handleDelete(b._id)}>Cancel booking</button>
                </div>)
            }
        </div>
    );
};

export default ManageBookings;
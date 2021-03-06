import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import {useState} from "react"
import { useForm } from "react-hook-form";
import './placeBooking.css'

const PlaceBooking = () => {
    const [selectedPackage, setSelectedPackage]=useState({});
    const [bookingInfo, setBookingInfo]=useState({});

    const today=new Date();
    const {id}=useParams();
    useEffect(()=>{
        fetch(`https://peaceful-sierra-90346.herokuapp.com/packages/${id}`)
        .then(res=>res.json())
        .then(data=>setSelectedPackage(data))
    },[])
    console.log(selectedPackage);
        const {image,package_name,_id,Price,Duration,description}=selectedPackage;
        // react hoke form 
        const { register, handleSubmit,reset } = useForm();

        const onSubmit = data =>{
            data.id=_id
            console.log(data)
            // setBookingInfo(...data,_id);
            
            fetch('https://peaceful-sierra-90346.herokuapp.com/booking',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(data)
            })
           .then(res=>res.json())
           .then(data=>{
               if(data.insertedId){
                   alert("Congradulation ")
               }
           })
           
        }
    return (
        <div className="booking-placed mt-5 mb-5 container d-lg-flex d-md-flex ">
        <div className="package-container mb-sm-5 me-lg-4">
        <img src={image} alt="" />
        <div className="info">
           <div className="row">
           <h3 className="col-8 col-lg-12">{package_name}</h3>
           <p className="col-4 col-lg-12">price : {Price}</p>
           <p className=" col-6 col-lg-12">Duration: {Duration}</p>
           <p className="col-12">{description}</p>
           </div>
            
            </div>
            </div>
            <div className="rh-form ms-lg-4  ms-md-5">
           
           <form className="row g-4" onSubmit={handleSubmit(onSubmit)}>
      <input className=" col-12 col-md-12 col-lg-6" {...register("full_name", { required: true})}
      placeholder="full name" />
      <input type="text" className="col-12 col-md-12 col-lg-6"  {...register("mobile")} placeholder="mobile"/>
      <input className="col-12 col-md-12 col-lg-6" {...register("email",{required:true})} placeholder="email" />
      <input className="col-12 col-md-12 col-lg-6" type="number" {...register("guest")} placeholder="no of guests" />
      <input className="col-12 col-md-12 col-lg-6" type="date" {...register("Check_In_Date")}/>
      <input className="col-12 col-md-1 col-lg-6" type="date" {...register("Check_Out_Date")} />
      <input className="col-12 col-md-12 col-lg-12" type="submit" value="Book Package"/>
    </form>
            </div>
           
        </div>
    );
};

export default PlaceBooking;
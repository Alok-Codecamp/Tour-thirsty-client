import React from 'react';
import { useHistory } from 'react-router';
import useLocalStore from '../../../hooks/useLocalStore';
import './HomePackage.css'

const HomePackage = (props) => {
    const {addToLocal}=useLocalStore();
    const history=useHistory();
    const {_id,package_name,image,Duration,Routes,Price}=props.tourPackage;

    const handlebook=(id)=>{
        history.push(`/placebooking/${id}`)
        addToLocal(id);
    }

    return (
        <div className="package-container">
            <img src={image} alt="" />
            <div className="info">
               <div className="row">
               <h3 className="col-8 col-lg-12">{package_name}</h3>
               <p className="col-4 col-lg-4">price : {Price}</p>
               </div>
               <div className="d-flex justify-content-between align-items-center">
               <p className="">duration :1night/2day </p>
                <p className="">Routes : {Routes}</p>
               </div>
                
                <button onClick={()=>handlebook(_id)}>Book now</button>
            </div>
        </div>
    );
};

export default HomePackage;
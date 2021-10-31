import React from 'react';
import { useHistory } from 'react-router';
import useLocalStore from '../../../hooks/useLocalStore';

const SinglePackage = (props) => {
    const {addToLocal}=useLocalStore();
    const history=useHistory();
    const {_id,package_name,image,Duration,description,Price}=props.tourPackage;

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
           <p className="col-4 col-lg-12">price : {Price}</p>
           <p className=" col-6 col-lg-12">Duration: {Duration}</p>
           <p className="col-12">{description.slice(0,200)}</p>
           </div>
          
            
            <button onClick={()=>handlebook(_id)}>Book now</button>
        </div>
    </div>
    );
};

export default SinglePackage;
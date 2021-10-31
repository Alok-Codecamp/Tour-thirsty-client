import React from 'react';
import { useForm } from 'react-hook-form';
import './AddPackage.css'
const AddPackage = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data)
    fetch('https://peaceful-sierra-90346.herokuapp.com/packages',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
   .then(res=>res.json())
   .then(data=>{
       if(data.insertedId){
           alert("package added successfully")
       }
   })
  };
    return (
        <>
        
        <div className="form-container">
            
            <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Add Package to database</h2>
      <input {...register("packageName", { required: true, maxLength: 50 })} placeholder="package Name" />
      <input {...register("status", { required: true, maxLength: 10 })} placeholder="status" />
      <input {...register("discription")} placeholder="discription"/>
      <input {...register("price")} placeholder="price" />
      <input {...register("image")} placeholder="imageLink"/>
      <input type="submit" value="Add Package" />
    </form>
        </div>
    </>
    );
};

export default AddPackage;
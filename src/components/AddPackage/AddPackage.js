import React from 'react';
import { useForm } from 'react-hook-form';

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
           alert("inserted successfully")
       }
   })
  };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("packageName", { required: true, maxLength: 50 })} placeholder="package Name" />
      <input {...register("discription")} placeholder="discription"/>
      <input {...register("price")} placeholder="price" />
      <input {...register("image")} placeholder="imageLink"/>
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddPackage;
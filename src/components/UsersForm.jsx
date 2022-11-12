import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

const UsersForm = ({getUsers, userSelected, deselectUser}) => {

  const initial = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    birthday: ''
  }

  useEffect (()=> {
    if (userSelected) {
      reset(userSelected)
    } else {
      reset(initial)
    }

  },[userSelected])

  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    if (userSelected){
      axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, data)
      .then(()=>{
        getUsers()
        deselectUser()
      })
    } else {
      axios.post('https://users-crud1.herokuapp.com/users/', data)
      .then(() => {
        getUsers()
        reset(initial)
      })
      .catch((error) => console.log(error.response?.data));
    }

    
  }

  return (
    <form onSubmit={handleSubmit(submit)} className='m-5 bg-white p-6 rounded-lg lg:w-max lg:h-max'>
      <h1 className='text-[25px] font-semibold mb-3'>{userSelected? 'Edit User' : 'New User'}</h1>
      <div className='mb-1'>
        <i className="fa-solid fa-user w-[15px]"></i>
        <label htmlFor="firstName"></label>
        <input {...register('first_name')} type="text" id='firstName' placeholder='first name'
          className='bg-[#D1F2EB] ml-2 rounded-md pl-2'
        />
      </div>
      <div className='mb-1'>
        <i className="fa-solid fa-user text-white w-[15px]"></i> 
        <label htmlFor="SecondName"></label>
        <input {...register('last_name')} type="text" id='SecondName' placeholder='last name'
          className='bg-[#D1F2EB] ml-2 rounded-md pl-2'
        />
      </div>
      <div className='mb-1'>
        <i className="fa-solid fa-envelope w-[15px]"></i> 
        <label htmlFor="email"></label>
        <input {...register('email')} type="email" id='email' placeholder='email'
          className='bg-[#D1F2EB] ml-2 rounded-md pl-2'
        />
      </div>
      <div className='mb-1'>
        <i className="fa-solid fa-lock w-[15px]"></i> 
        <label htmlFor="password"></label>
        <input {...register('password')} type="text" id='password' placeholder='password'
          className='bg-[#D1F2EB] ml-2 rounded-md pl-2'
        />
      </div>
      <div className='mb-1'>
        <i className="fa-solid fa-cake-candles w-[15px]"></i> 
        <label htmlFor="birthday"></label>
        <input {...register('birthday')} type="date" id='birthday' 
          className='bg-[#D1F2EB] ml-2 rounded-md pl-2'
        />
      </div>
      <button className='bg-[#EDBB99] rounded-lg w-full mt-5 text-[#1334A2] h-10 font-bold hover:bg-[#F1948A]'>Upload</button>
    </form>
  );
};

export default UsersForm;
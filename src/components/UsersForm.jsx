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
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input {...register('first_name')} type="text" id='firstName'/>
      </div>
      <div>
        <label htmlFor="SecondName">Last Name</label>
        <input {...register('last_name')} type="text" id='SecondName'/>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input {...register('email')} type="email" id='email'/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input {...register('password')} type="text" id='password'/>
      </div>
      <div>
        <label htmlFor="birthday">Birthday</label>
        <input {...register('birthday')} type="date" id='birthday'/>
      </div>
      <button>Submit</button>
    </form>
  );
};

export default UsersForm;
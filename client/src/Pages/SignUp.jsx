import { Alert, Button, Spinner, TextInput } from 'flowbite-react';
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import OAuth from '../Components/OAuth';

function SignUp() {
  const [formData,setForm]=useState({});
  const[errorMessage,setErrorMessage]=useState(null);
  const[loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const handleChange=(e)=>{
    setForm({...formData,[e.target.id]:e.target.value.trim()})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.password){
      return setErrorMessage('Please fill in all fields');
    }
    console.log("heandle submit");
    console.log(formData);
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data=await res.json();
      if(data.success==false){
        setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok){
        navigate('/signin');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
      setLoading(false)
    }
  }
  return (
    <div className='min-h-screen mt-20 ]'>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        <div className="left flex-1">
          <Link to={'/'} className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 rounded-lg bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 text-white'>Jugnu</span>
            Everyday
          </Link>
          <p className='text-sm mt-5'>
            Everyday is jugnu day
          </p>
        </div>
        <div className="right flex-1">
          <form method="post" className='flex flex-col gap-3' onSubmit={handleSubmit}>
            <label htmlFor="">Your Username</label>
            <TextInput type="text" name="username" id="username" placeholder='JohnDoe'   onChange={handleChange}/>
            <label htmlFor="">Your Email</label>
            <TextInput type="text" name="email" id="email"  placeholder='JohnDoe@gmail.com' onChange={handleChange}/>
            <label htmlFor="">Your Password</label>
            <TextInput type="password" name="password" id="password"  placeholder='******' onChange={handleChange}/>

            <Button disabled={loading} type='submit' className="px-2 py-1 mt-2 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 text-gray-900 hover:bg-gradient-to-bl focus:ring-red-100 dark:focus:ring-red-400">
              {
                loading ? (
                  <>
                  <Spinner size='sm'/>
                  <span>Loading....</span>
                  </>
                ):'Sign Up'
              }
            </Button>
            <OAuth/>
            <div className="flex gap-2 text-sm mt-3">
              <span>Have an account</span>
              <Link to={'/signin'} className='text-blue-500'>Sign in</Link>
            </div>
            {
              errorMessage && (
                <Alert className='mt-5' color='red'>{errorMessage}</Alert>
              )
            }
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp

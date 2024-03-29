import { Alert, Label, TextInput, Button, Spinner } from 'flowbite-react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signInFailure, signInStart, signInSuccess } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

const SignIn = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  // const [loading, setLoading] = useState(false);
  // const [errorMessage, setErrorMessage] = useState(null);
  const {loading, error: errorMessage} = useSelector(state=>state.user);
  const navigate = useNavigate();
  const handleChange = (event)=>{
    setFormData({
      ...formData, [event.target.id]: event.target.value.trim()
    });
    // setFormData((prevData)=>{
    //   return {
    //     ...prevData, [event.target.id] : event.target.value.trim()
    //   }
    // });
  }

  const handleSubmit = async (event) =>{
    // setLoading(true);
    // setErrorMessage(null);    
    event.preventDefault();
    if(!formData.email || !formData.password){
      // return setErrorMessage('All fields are required');
      return dispatch(signInFailure('You can not clap from one hand'));
    }
    //api integration
    try{
      dispatch(signInStart());
      const res = await fetch('/backend/auth/signin', {
        method: 'POST',
        headers : {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success === false){
        // setLoading(false);
        // return setErrorMessage(data.message);
        dispatch(signInFailure(data.message));
      }
      if(res.ok){
        dispatch(signInSuccess(data));
        navigate('/');
      }
    }
    catch(error){
      dispatch(signInFailure(error.message));
      // setLoading(false);
      // setErrorMessage(error.message);
    }
  }
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left */}
        <div className='flex-1'>
          <Link to='/' className=''>
            <span className='text-2xl md:text-4xl font-bold bg-gradient-to-r from-gray-950 to-blue-400 text-white px-3 py-1 rounded-lg '>Raahat's</span>
            Blog
          </Link>
          <p className='text-md pt-2'>
            Let's revolutionise the environment by the expression of contemplation.
          </p>
        </div>

        {/* right */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
           
            <Label value='Your E-mail' />
            <TextInput 
              type='email'
              id='email'
              placeholder='name@company.com'
              className=''
              onChange={handleChange}
            />

            <Label value='Your Password' />
            <TextInput 
              type='password'
              id='password'
              placeholder='*********'
              className=''
              onChange={handleChange}
            />
            <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
               {loading ? ( 
                <div>
                  <Spinner size='sm' color="info" aria-label="Info spinner example" />
                  <span className='pl-2'>loading...</span>
               </div>
               ) : 'Sign in'}
            </Button>
            <OAuth />
          </form>
          <div className='text-base mt-3 flex gap-2'>
            <p>Don't have an account?</p>
            <Link to='/sign-up'>
              <span className='text-blue-600 '>sign up</span>
            </Link>
          </div>
          {errorMessage && (
            <Alert className='mt-5' color='failure'> {errorMessage} </Alert>
          )}
        </div>
      </div>
    </div>
  )
}

export default SignIn
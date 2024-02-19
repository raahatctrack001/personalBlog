import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChange = (event) =>{
    // setFormData({
    //   ...formData, [event.target.id]: event.target.value
    // });
    setFormData((prevData)=>{
      return {
        ...prevData, [event.target.id]: event.target.value.trim()
      }
    });
  }
  

  const handleSubmit = async (event) =>{
    event.preventDefault();
    try{
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/backend/auth/signup', {
        method:'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      
      if(data.success === false){
        setLoading(false);
        return setErrorMessage(data.message);
      }
      navigate('/sign-in');
    }
    catch(error){
      setLoading(false);
      setErrorMessage(error.message);
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
            <Label value='Your Username' />
            <TextInput 
              type='text'
              id='username'
              placeholder='username'
              className=''
              onChange={handleChange}
            />

            <Label value='Your E-mail' />
            <TextInput 
              type='email'
              id='email'
              placeholder='falana@dhimkana.com'
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
               ) : 'Sign up'}
            </Button>
          </form>
          <div className='text-base mt-3 flex gap-2'>
            <p>Already have an account ?</p>
            <Link to='/sign-in'>
              <span className='text-blue-600 '>sign in</span>
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

export default Signup
import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
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
          <form className='flex flex-col gap-4'>
            <Label value='Your Username' />
            <TextInput 
              type='text'
              id='username'
              placeholder='username'
              className=''
            />

            <Label value='Your E-mail' />
            <TextInput 
              type='email'
              id='email'
              placeholder='falana@dhimkana.com'
              className=''
            />

            <Label value='Your Password' />
            <TextInput 
              type='password'
              id='password'
              placeholder='*********'
              className=''
            />
            <Button gradientDuoTone='purpleToPink' type='submit'>
                Sign Up
            </Button>
          </form>
          <div className='text-base mt-3 flex gap-2'>
            <p>Already have an account ?</p>
            <Link to='/sign-in'>
              <span className='text-blue-600 '>sign in</span>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Signup
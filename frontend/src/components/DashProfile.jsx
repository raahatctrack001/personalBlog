import { Button, TextInput } from 'flowbite-react';
import React from 'react'
import {useSelector} from 'react-redux'

const DashProfile = () => {
  const { currentUser } = useSelector(state=>state.user) 
  // console.log(currentUser);
  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
      <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
      
      <form className='flex flex-col gap-4'>

        <div className='relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full'>
          <img
            className='rounded-full w-full h-full object-cover border-8 border-[lightgray]-full self-center' 
            src={currentUser.profilePicture} />
        </div>

        <TextInput 
          type='text'
          id='email'
          className=''
          placeholder={currentUser.email}
        />

        <TextInput 
          type='text'
          className=''
          id='username'
          placeholder={currentUser.username}
        />

        <TextInput 
          type='password'
          className=''
          id='password'
          placeholder='********'
        />

        <Button
          type='submit'
          gradientDuoTone='purpleToBlue'
          outline
          >Upload...</Button>
      
      </form>
      <div className='text-red-500 flex justify-between mt-5'>
        <span className='cursor-pointer'> Delete Account </span>
        <span className='cursor-pointer'> Sign Out </span>
      </div>
    </div>
  )
}

export default DashProfile
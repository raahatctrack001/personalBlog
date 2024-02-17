import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button, Navbar, TextInput } from 'flowbite-react'
import { LuMailSearch } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import { MdDarkMode } from "react-icons/md";

const Headers = () => {
  const path = useLocation().pathname; //localhost:5172/projects; this path will give '/projects'
  return (
    <Navbar className='border-b-2 md:border-b-3 border-zinc-800'>
      <Link to='/'>
        <span className='md:text-xl font-semibold bg-gradient-to-r from-gray-950 to-blue-400 text-white px-3 py-1 rounded-lg '>Raahat's</span>
        Blog
      </Link>

      <form>
        <TextInput 
          type='text'
          name=''
          placeholder='search...'
          className='hidden sm:inline'
          rightIcon={LuMailSearch}
        />
      </form>
      <Button      
          color='gray'
          className='sm:hidden bg-gray-200'
          pill>
          <FiSearch />
        </Button> 
      <div className='flex gap-2 md:order-2'>     
        <Button
          className='hidden sm:inline'
          pill
          color='gray'>
          <MdDarkMode />
        </Button>
        <Link to='/sign-in'>
          <Button  
            outline        
            pill
            gradientDuoTone='purpleToBlue'
            className=''
            color='gray'>
            Sign In
          </Button>
        </Link>    
        <Navbar.Toggle />   
      </div>
      <Navbar.Collapse>
        <Navbar.Link as='div' active={path==='/'}>
          <Link to='/' >
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link as='div' active={path==='/about'}>
          <Link to='/about'>
            About
          </Link>
        </Navbar.Link>
        <Navbar.Link as='div' active={path==='/projects'}>
          <Link to='/projects'>
            Projects
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Headers
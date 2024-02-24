import React, { useEffect, useState } from 'react'
import {Sidebar} from 'flowbite-react'
import {HiUser,  HiArrowSmRight} from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom'
const DashSidebar = () => {
    const location = useLocation();
    const [tab, setTab] = useState('');

    useEffect(()=>{
        const searchParams = new URLSearchParams(location.search);
        const tabFromURL = searchParams.get('tab');
        if(tabFromURL){
            setTab(tabFromURL);
        }
    }, [location.search]);
  return (
    <Sidebar className='w-full md:w-56'>
        <Sidebar.Items>
            <Sidebar.ItemGroup>
            <Link to='/dashboard?tab=profile'>
                <Sidebar.Item as='div' active={tab==='profile'} icon={HiUser} label='user' labelColor='dark' >
                    profile
                </Sidebar.Item>
            </Link>
                <Sidebar.Item icon={HiArrowSmRight} >
                    Sign Out
                </Sidebar.Item>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
  )
}

export default DashSidebar
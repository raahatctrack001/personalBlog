import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import DashSidebar from '../components/DashSidebar'
import DashProfile from '../components/DashProfile';

const Dashboard = () => {
  //localhost:5173/dashboard?tab=profile
  const location = useLocation();
  // location = {pathname: '/dashboard', search: '?tab=profile', hash: '', state: null, key: 'default'}

  const [tab, setTab] = useState('');

  useEffect(()=>{
    const urlParams = new URLSearchParams(location.search);
    const tabFromURL = urlParams.get('tab');

    if(tabFromURL){
      setTab(tabFromURL);
    }
    
  }, [location.search])
 
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div>
        <DashSidebar />

      </div>

      {tab==='profile' && <DashProfile />}
    </div>
  );
}

export default Dashboard
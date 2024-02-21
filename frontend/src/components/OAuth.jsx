import { Button } from 'flowbite-react'
import React from 'react'
import { FaGooglePlusG} from "react-icons/fa";
import { app } from '../firebase';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {signInSuccess} from '../redux/user/userSlice'
const OAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = getAuth(app);
    const handleGoogleClick = async ()=>{
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters(
            {
                prompt: 'select_account'
            }
        );

        try{
            const resultsFromGoogle = await signInWithPopup(auth, provider);
            const res = await fetch('/backend/auth/google', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: resultsFromGoogle.user.displayName,
                    email: resultsFromGoogle.user.email,
                    googlePhotoUrl: resultsFromGoogle.user.photoURL,
                }),
            })
            const data = await res.json(); //converting data into json
          
            if(res.ok){
                dispatch(signInSuccess(data));
                navigate('/');
            }
            
        }
        catch(error){
            console.log(error);
        }

    }
  return (
    <Button type='button' outline onClick={handleGoogleClick}>
        <FaGooglePlusG className='w-5 h-5 mr-2' />
        Continue with Google
    </Button>
  )
}

export default OAuth
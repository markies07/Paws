import React, {useState} from 'react'
import close from './assets/close.svg'
import logo from './assets/white-logo.png'
import image from './assets/login-pic.jpg'
import google from './assets/google.svg'
import facebook from './assets/facebook.svg'
import { auth, provider, signInWithPopup } from '../../firebase/firebase'
import { useNavigate } from 'react-router-dom'
import LoadingScreen from '../General/LoadingScreen'


function Login({ isOpen, onClose }) {
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log('User Info: ', user);
            setIsLoading(true);
            setTimeout(() => {
                window.location.href = '/dashboard'; // Replace with your actual dashboard route
            }, 2000);
            // navigate('/dashboard');
        }
        catch (error) {
            console.error('Error during Google login:', error);
        }
    }
    

    return (
        <div style={{
                right: isOpen ? '0' : '-50rem',
                transition: 'right 0.5s ease-in-out',
                }}
        className='fixed top-0 bg-secondary z-30 w-full md:w-96 max-h-screen min-h-screen flex flex-col overflow-auto'>
        
            <div className='w-full relative flex flex-col p-6 h-sm:p-8 items-center justify-center'>
                <img className='w-36 h-sm:w-40' src={logo} alt="" />
                <button onClick={onClose} className='absolute top-4 right-4 p-1 duration-150 cursor-pointer border-2 border-transparent hover:border-[#F75959]'>
                    <img className='w-6 h-sm:w-7' src={close} alt="" />
                </button>
            </div>
            <div className='w-full h-52 h-sm:h-64'>
                <img className='object-cover w-full h-full' src={image} alt="" />
            </div>
            <div className='flex flex-col items-center h-full'>
                <div className='w-[80%] py-16'>
                    <p className='text-4xl font-semibold'>Login to <br /> start adopting.</p>
                </div>
                <div className='w-[80%] flex gap-3 h-full items-end'>
                    <button className='w-full py-3 h-sm:py-4 font-semibold rounded-lg border-2 hover:bg-[#df4545] duration-150 border-primary bg-primary text-secondary'>Create Account</button>
                    <button className='w-full py-3 h-sm:py-4 font-semibold rounded-lg border-2 hover:bg-[#ffdddd] duration-150 border-primary text-primary'>Log in</button>
                </div>
                <div className='w-[80%] my-5'>
                    <div className='h-[1.3px] w-full relative bg-[#9e9e9e]'>
                        <div className='absolute -top-3 w-full text-center'>
                        <p className='text-sm bg-secondary text-[#9e9e9e] font-medium inline-block px-3'>or continue with</p> 
                        </div>
                    </div>
                </div>
                <div className='w-[80%] pb-10 flex flex-col gap-3'>
                    {isLoading ? <LoadingScreen /> : (
                        <button onClick={handleGoogleLogin} className='w-full relative py-2 h-sm:py-3 font-semibold rounded-lg border-2 border-primary text-primary hover:bg-[#ffdddd] duration-150'>Log in with Google
                            <img className='absolute top-[7px] h-sm:top-[10px] left-3 w-7' src={google} alt="" />
                        </button>
                    )}
                    <button className='w-full relative py-2 h-sm:py-3 font-semibold rounded-lg border-2 border-primary text-primary hover:bg-[#ffdddd] duration-150'>Log in with Facebook
                        <img className='absolute top-[7px] h-sm:top-[10px] left-3 w-7' src={facebook} alt="" />
                    </button>
                </div>
            </div>
        </div>
    
    )
}

export default Login
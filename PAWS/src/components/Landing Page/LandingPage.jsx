import React, { useState } from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import Login from './Login'
import AccountForm from './AccountForm'
import Cards from './Cards'

function LandingPage() {

  const [isLoginOpen, setIsLoginOpen] = useState(false);


  const handleLoginClick = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const handleClose = () => {
    setIsLoginOpen(false);

  };


  return (
    <div className='relative min-h-screen flex flex-col select-none'>
      < AccountForm />
      < Cards />
      <Login isOpen={isLoginOpen} onClose={handleClose} />
      <div className='bg-[#FAFAFA] relative'>
        {isLoginOpen && (<div className='fixed inset-0 duration-150 bg-black opacity-50 z-20'></div>)}
        <Header onLoginClick={handleLoginClick} />
        <Content onLoginClick={handleLoginClick} />
        <Footer />
      </div>
    </div>
  )
}

export default LandingPage
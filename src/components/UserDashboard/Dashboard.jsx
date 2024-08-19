import React from 'react'
import paws from '../../assets/images/white-logo.png'

function Dashboard() {
  return (
    <div className='flex w-full h-screen justify-center items-center bg-secondary'>
        <div>
          <img src={paws} alt="" />
          <h1 className='text-center py-5 text-4xl font-bold text-primary'>Coming Soon ...</h1>
        </div>
    </div>

  )
}

export default Dashboard
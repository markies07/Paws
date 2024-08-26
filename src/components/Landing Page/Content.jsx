import React from 'react'
import banner from './assets/banner.png'
import dogs from './assets/dogs.svg'
import cats from './assets/cats.svg'
import shelter from './assets/shelter.svg'
import arrow from './assets/arrow.svg'
import logo from './assets/orange-paws.png'
import AnimalCard from '../General/AnimalCard'

function Content({ onLoginClick }) {
  return (
    <div className='h-full'>
      {/* BANNER */}
      <div className='w-full relative justify-center h-36 sm:h-56 lg:h-64 xl:h-80 flex'>
          <img className='w-full object-cover' src={banner} alt="" />
          <div className='text-[#FAFAFA] top-0 h-full flex flex-col md:pb-5 justify-center px-5 text-center absolute'>
              <p className='font-bold text-3xl drop-shadow-xl sm:text-4xl lg:text-5xl'>Find a New Member of the Family</p>
              <p className='font-medium hidden md:block'>Adopt a pet. Connect with owners and bring home your new companion.</p>
          </div>
      </div>
      {/* ANIMALS */}
      <div className='bg-primary relative text-[#FAFAFA] h-20 md:h-3 flex items-center justify-center'>
          <p className='drop-shadow-lg md:hidden mb-3 text-xs sm:text-sm px-5 text-center'>Adopt a pet. Connect with owners and bring home your new companion.</p>
          {/* CARDS */}
          <div className='absolute grid grid-cols-2 md:grid-cols-3 gap-4 bottom-[-17.5rem] md:-bottom-20'>
            <div className='bg-[#FAFAFA] border-[1px] gap-3 py-5 px-7 rounded-xl drop-shadow-md hover:cursor-pointer hover:drop-shadow-xl duration-150 flex flex-col items-center justify-center'>
              <img className='w-16' src={dogs} alt="" />
              <p className='text-primary font-medium'>Dogs</p>
            </div>
            <div className='bg-[#FAFAFA] border-[1px] gap-3 py-5 px-7 rounded-xl drop-shadow-md hover:cursor-pointer hover:drop-shadow-xl duration-150 flex flex-col items-center justify-center'>
              <img className='w-16' src={cats} alt="" />
              <p className='text-primary font-medium'>Cats</p>
            </div>
            <div className='bg-[#FAFAFA] border-[1px] gap-3 col-span-2 md:col-span-1 py-5 px-7 rounded-xl drop-shadow-md hover:cursor-pointer hover:drop-shadow-xl duration-150 flex flex-col items-center justify-center'>
              <img className='w-16' src={shelter} alt="" />
              <p className='text-primary font-medium'>Shelter & Rescues</p>
            </div>
          </div>
      </div>
      {/* AVAILABLE PETS */}
      <div className='mt-96 md:mt-52 flex justify-center flex-col items-center'>
        <h1 className='text-[#5D5D5D] inline-block font-semibold text-center text-3xl px-5'>Pets Available for Adoption
          <span className='inline-block ml-4 align-middle'><img className='w-4' src={arrow} alt="" /></span>
        </h1>
        <div className='mt-10 mx-5 mb-40 gap-5 grid grid-cols-2 md:grid-cols-4'>
          <AnimalCard onLoginClick={onLoginClick}/>
          <div className='w-full max-w-48 relative m-auto items-center justify-between h-64 bg-primary flex flex-col drop-shadow-lg rounded-xl overflow-hidden'>
            <img className='w-32 pt-4' src={logo} alt="" />
            <p className='text-white text-sm px-3 text-center'>3 more pets available on Paws</p>
            <p onClick={onLoginClick} className='text-white hover:bg-[#ff6c6c] duration-150 cursor-pointer font-medium w-full flex justify-center items-center border-t-[1px] border-white h-11'>MEET THEM</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
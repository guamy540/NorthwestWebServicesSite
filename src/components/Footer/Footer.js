import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className='FooterContainer flex flex-row text-white justify-center items-center'>
      <div className='flex flex-col items-center justify-center pt-2 pb-2'>
        <p className='text-xs'>Copyright © 2023 FizzBuzz Web Services, all rights reserved </p>
        <p className='text-xs'> Bellingham, WA 98029</p>
      </div>
    </footer>
  )
}

export default Footer

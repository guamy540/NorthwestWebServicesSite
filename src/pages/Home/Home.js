import React from 'react'
import "./Home.css"
import WhyCards from '../../components/WhyCards/WhyCards'

const Home = () => {
  return (
    <div className='HomeContainer flex flex-col bg-black'>

      <div className='SplashContainer text-white background-tint'>
        <div className='SplashHeader'>
          <h1 className='text-5xl'>FizzBuzz</h1>
        </div>
        <div className='SplashTextButtonContainer'>
          <div className='SplashTaglineContainer'>
            <h2>Unleash the full potential of your business with FizzBuzz! 
            Our tailored solutions are designed to meet your specific needs and budget, 
            ensuring the perfect online presence for your unique business.</h2>
          </div>
          <div>
           <button className='SplashContactButton uppercase rounded-xl p-4 drop-shadow-2xl'>Contact us</button>
          </div>
         </div>
      </div>
     

      <div className='bg-black text-white text-center mt-12'>
          <div>
            <h3 className='text-3xl mt-4'>Websites Generate Business!</h3>
            <h4 className='p-4 text-2xl'>A website is an essential tool for any business looking to grow and 
              reach new customers. Here are a few reasons why:</h4>
          </div>
          <WhyCards/>
      </div>

      <div className='ContactNowContainer text-white text-center pb-8 pt-8'>
        <h4 className='text-3xl p-4'>Take Your Online Presence to the Next Level</h4>
        <p className='p-4'>Unleash your online potential with Northwest Web Services 
        tailored solutions. Get in touch today and 
        let's make your website work for you!</p>
        <a href='/contact'>
          <button className='uppercase p-4 rounded-xl'>Get A Quote!</button>
        </a>
      </div>

    </div>
  )
}

export default Home

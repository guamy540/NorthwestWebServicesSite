import React from 'react'
import "./Home.css"
import WhyCards from '../../components/WhyCards/WhyCards'

const Home = () => {
  return (
    <div className='HomeContainer flex flex-col bg-black'>

      <div className='SplashContainer row background-tint justify-center items-center'>
        <div className='DescriptionSplash text-white column'>
          <h1 className='text-white text-4xl uppercase'>Web development tailored to your budget</h1>
          <p className='m-10'>Unleash the full potential of your small to medium sized business with Northwest Web Services. 
            Our tailored solutions are designed to meet your specific needs and budget, 
            ensuring the perfect online presence for your unique business.</p>
          <button className='uppercase rounded-xl p-4 bg-lime-900 drop-shadow-2xl'>Contact us</button>
        </div>

        <div className='column'>
          <div className='QuoteCardContainer'>
            <div className='QuoteCard bg-gray-400 rounded-lg m-8 p-4'>
              <h2 className='pb-1'>Get a Free Quote</h2>
              <p className='pb-3'>Learn about our 
                <span className='text-lime-900 font-semibold'> step-by-step process.</span>
              </p>
              <form name="form" className='contactRow flex flex-col'>
                <input type="text" name="name" placeholder='Name'
                className="form-control ml-4 mr-4 rounded-md"/>
                <input type="email" name="user_email" placeholder='Email'
                className="form-control rounded-md m-4"/>
                <p className='text-left ml-4 font-semibold'>Range:</p>
                <input type="text" name="user_email" placeholder='$500-$15,000'
                className="form-control rounded-md ml-4 mr-4 mb-4 mt-2"/>
                <textarea name='message' rows='4' placeholder='Brief description about how we can help'
                className="form-control m-4 rounded-md"/>
                <input type='submit' className="bg-black text-white w-32 h-12 rounded-lg ml-4 mb-4"/>
              </form>
            </div>
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

      <div className='ContactNowContainer bg-lime-900 text-white text-center pb-8 pt-8'>
        <h4 className='text-2xl p-4'>Take Your Online Presence to the Next Level</h4>
        <p className='p-4'>Unleash your online potential with Northwest Web Services 
        tailored solutions. Get in touch today and 
        let's make your website work for you!</p>
        <a href='/contact'>
          <button className='uppercase bg-black p-4 rounded-xl'>Get A Quote!</button>
        </a>
      </div>

    </div>
  )
}

export default Home

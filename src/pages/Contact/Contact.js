import React from 'react'

const Contact = () => {
  return (
    <div className='QuoteCardContainer'>
        <div className='QuoteCard rounded-lg m-8 p-4'>
            <h2 className='pb-4 text-xl font-semibold '>Get a Free Quote</h2>
            {/*<p className='pb-3'>Learn about our 
            <span className='text-lime-900 font-semibold'> step-by-step process.</span>
            </p>*/}
            <form name="form" className='contactRow flex flex-col'>
            <label className='text-left ml-4 mb-2 font-semibold'>Name</label>
            <input type="text" name="name" placeholder='Name'
            className="form-control ml-4 mr-4 rounded-md "/>
            <label className='text-left ml-4 mb-2 mt-2 font-semibold'>Email</label>
            <input type="email" name="user_email" placeholder='Email'
            className="form-control rounded-md ml-4 mr-4"/>
            <label className='text-left ml-4 font-semibold mt-2'>Range</label>
            <input type="text" name="user_email" placeholder='$500-$15,000'
            className="form-control rounded-md ml-4 mr-4 mb-4 mt-2"/>
            <label className='text-left ml-4 mb-2 font-semibold'>Message</label>
            <textarea name='message' rows='4' placeholder='Brief description about how we can help'
            className="form-control ml-4 mr-4 rounded-md"/>
            <input type='submit' className="mt-2 bg-black text-white w-32 h-12 rounded-lg ml-4 mb-4"/>
            </form>
        </div>
        </div>
  )
}

export default Contact

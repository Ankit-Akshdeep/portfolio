import React from 'react'

const Contact = () => {
  return (
    <div name='contacts' className='w-full h-screen bg-[#202021] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/nbdovrva" className='flex flex-col max-w-[600px] w-full '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#749EB2] text-gray-300'>Contact</p>
                <p className='text-gray-300 p-4' >Submit the form below or shoot me an email - ankit.25akshdeep@gmail.com</p>
            </div>

            <input className='my-4 p-2 bg-[#1f1e1e]' type="text" placeholder='Name' name='name'  />
            <input className='my-4 p-2 bg-[#1f1e1e]' type="email" placeholder='Email' name='email'  />
            <textarea className='bg-[#1f1e1e] p-2' name="Message" rows={10} placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#758db3] hover:border-[#758db3] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>

        </form>
    </div>
  )
}

export default Contact
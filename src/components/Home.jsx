import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#202021]'>Home
    
             {/*Container*/}
             <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#C4AE78]'> Hi, My name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#749EB2]'>Ankit Akshdeep</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#e6edfa]'>I'm a full stack Developer.</h2>
                <p className='text-[#F9F6F0] py-4 max-w-[700px]'>Current Masters student in Computer Applications who is determined to learn from each step taken forward. Generating the ability to accept challenges and be upfront. Building myself to be available for the environment that would be provided to me with the aim to turn ideas into reality.</p>

                <div>
                    <button className='text-white group border-2 rounded-md px-6 py-3 my-2 flex items-center hover:bg-[#758db3] hover:border-[#758db3]'>View Work 
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3'/>
                        </span> 
                    </button>
                </div>
            </div>

   
    </div>
)
}

export default Home
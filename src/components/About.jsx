import React from 'react'

const About = () => {
  return (
    <div name='About' className='w-full h-screen bg-[#202021] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
           
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#749EB2]'>About</p>
                </div>
                <div>

                </div>
            </div>

            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hey, I'm Ankit. Nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p> Building myself to be available for the environment that would be provided to me with the aim to turn ideas into reality. I will take risk, push boundaries and grow more. I
                        want to build a strong professional network through the apprenticeship. Looking forward to improve myself in the
                        desired field.
                    </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default About
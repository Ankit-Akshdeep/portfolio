import React from 'react'
import HTML from '../assets/html.png'
import css from '../assets/css.png'
import JS from '../assets/javascript.png'
import ret from '../assets/react.png'
import node from '../assets/node.png'
import mongo from '../assets/images.png'



const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#202021] text-gray-300 mb-5'>

            <div className='nax-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className=' font-bold inline border-b-4 border-[#749EB2] text-4xl '>Skills</p>
                    <p className='py-4'>These are the technologies which I have worked with.</p>
                </div>

                <div className='w-full grid gris-col-2 sm:grid-cols-3 gap-4 text-center py-8'>

                    <div className='shadow-md shadow-[#141414] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto ' src={HTML} alt="html icon" />
                        <p className='my-4'>HTML</p>
                    </div>

                    <div className='shadow-md shadow-[#141414] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto ' src={mongo} alt="html icon" />
                        <p className='my-4'>MongoDB</p>
                    </div>

                    <div className='shadow-md shadow-[#141414] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto ' src={JS} alt="html icon" />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>

                    <div className='shadow-md shadow-[#141414] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto ' src={css} alt="html icon" />
                        <p className='my-4'>CSS</p>
                    </div>

                    <div className='shadow-md shadow-[#141414] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto ' src={ret} alt="html icon" />
                        <p className='my-4'>REACT</p>
                    </div>

                    <div className='shadow-md shadow-[#141414] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto ' src={node} alt="html icon" />
                        <p className='my-4'>NODE.JS</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Skills

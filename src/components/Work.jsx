import React from 'react'
import Spotify from '../assets/S.jpg';
import pet from '../assets/DandC.jpg';
import SSG from '../assets/SSG.jpg';
import W from '../assets/weather.jpg';

const Work = () => {
    return (
        <div name='work' className='bg-[#202021] w-full md:h-screen text-gray-300'>

            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#749EB2] text-gray-300 '>Learning Projects</p>
                    <p className='py-6'>These are some of the projects that I have built recently.</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-col-4 gap-4'>

                    <div style={{ backgroundImage: `url(${pet})` }} className=' group container rounded-md flex justify-center items-center mx-auto content-div'>

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Pet Adoption Application
                            </span>
                            <div className='pt-8 text-center '>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${W})` }} className=' group container rounded-md flex justify-center items-center mx-auto content-div'>


                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Weather App
                            </span>
                            <div className='pt-8 text-center '>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${SSG})` }} className=' group container rounded-md flex justify-center items-center mx-auto content-div'>


                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Pet Adoption Application
                            </span>
                            <div className='pt-8 text-center '>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${Spotify})` }} className=' group container rounded-md flex justify-center items-center mx-auto content-div'>


                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                               Spotify
                            </span>
                            <div className='pt-8 text-center '>
                                <a href="https://github.com/Ankit-Akshdeep/Spotify-Clone-/tree/main/Spotify-Clone">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Work

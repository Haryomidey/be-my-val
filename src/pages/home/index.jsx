import React from 'react'
import HeroImage from '../../assets/images/hero.png';
import MakeSelection from './MakeSelection';

const Home = () => {
    return (
        <div className='w-full bg-[#111827] min-h-screen text-white'>

            <div className='w-full min-h-[500px] flex flex-wrap items-center justify-center lg:justify-between gap-y-10 pt-28 pb-5 px-5 sm:px-10 md:px-20'>
                <div className='w-full lg:w-[48%] text-center lg:text-left'>
                    <h1 className='text-4xl sm:text-[3.6rem] font-semibold sm:leading-[4rem]'>Blockchain <br /> Amendment</h1>
                    <p className='text-base sm:text-xl mt-3'>
                        This protocol offers an open and decentralized system for synchronizing multiple wallet platforms securely. It serves as a protocol facilitating remote resolution between all non-custodial wallets.
                        <br /><br />
                        Operating as an online server, it connects users with wallet representatives to efficiently address and resolve issues. This interaction occurs solely with an artificial intelligence robot, ensuring no human intervention.
                    </p>
                    
                </div>
                <div className='w-full lg:w-[48%]'>
                    <img src={HeroImage} alt="" />
                </div>
            </div>

            <div className='pt-40 min-h-[500px] px-5 lg:px-16'>
                <MakeSelection />
            </div>
        </div>
    )
}

export default Home
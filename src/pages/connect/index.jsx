import { useState } from 'react';
import { imageData } from '../../data/image_data';

import { IoMdClose } from "react-icons/io";
import DataList from '../../components/DataList';
import ManualConnection from './ManualConnection';
import AutoConnect from './AutoConnect';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Connect = () => {

    const [showConnect, setShowConnect] = useState(false);
    const [clickedName, setClickedName] = useState('');
    const [clickedImage, setClickedImage] = useState('');
    const [loadWallet, setLoadWallet] = useState(false);
    const [connectManually, setConnectManually] = useState(false);

    const getRandomTimeout = () => {
        const delays = [3000, 4000, 5000];
        return delays[Math.floor(Math.random() * delays.length)];
    }

    const handleClicked = (name) => {
        setShowConnect(true);
        setClickedName(name.name);
        setClickedImage(name.image)
        setLoadWallet(true);

        const randomTimeout = getRandomTimeout();
        setTimeout(() => {
            setLoadWallet(false);
        }, randomTimeout);
    }

    const handleTryAgain = () => {
        setLoadWallet(true);

        const randomTimeout = getRandomTimeout();
        setTimeout(() => {
            setLoadWallet(false);
        }, randomTimeout);
    }

    const resetAll = () => {
        setShowConnect(false);
        setConnectManually(false);
        setShowConnect(false);
    }

    const handleConnectManually = () => {
        setConnectManually(true);
    }

    return (
        <div className='flex flex-col items-center px-7 text-[#587087] pb-8 text-center relative'>
            
            <header className='h-[80px] border-b w-full'>

            </header>

            <h1 className='mt-10 text-xl sm:text-4xl font-bold text-black'>Select a Wallet</h1>
            <DataList imageData={imageData} handleClicked={handleClicked} />
            <AutoConnect 
                connectManually={connectManually}
                showConnect={showConnect}
                resetAll={resetAll}
                handleConnectManually={handleConnectManually}
                clickedName={clickedName}
                clickedImage={clickedImage}
                loadWallet={loadWallet}
                handleTryAgain={handleTryAgain}
            />
            {connectManually && <ManualConnection 
                resetAll={resetAll}
                IoMdClose={IoMdClose}
                clickedName={clickedName}
                clickedImage={clickedImage}
            />}
            <ToastContainer />
            <p className='mt-28 mb-16'>Dapps Integration © . All Rights Reserved.</p>
        </div>
    )
}

export default Connect
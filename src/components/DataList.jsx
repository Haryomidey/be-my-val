import React from 'react';

const DataList = ({ imageData, handleClicked }) => {
    return (
        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {imageData.map((data, index) => (
                <li
                    key={index}
                    className="flex items-center gap-3 bg-white rounded-lg shadow-md p-4 cursor-pointer"
                    onClick={() => handleClicked(data)}
                >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mb-2 rounded-full overflow-hidden">
                        <img
                            src={data.image}
                            alt={data.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className='text-left'>
                        <p className="mt-2 text-base font-semibold text-gray-800">{data.name}</p>
                        <p className="text-sm text-gray-500">{data.url}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default DataList;

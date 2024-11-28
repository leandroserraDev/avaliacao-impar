import React, { useState } from 'react';
import BotaoCardEditarGrid from './BotaoCardEditarGrid';
import BotaoCardExcluirGrid from './BotaoCardExcluirGrid';

const Card = ({ image, cardName, status }) => {

    console.log(image);
    return (
        <div className="max-w-sm w-[250px] bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden self-center">

            <div className=' shadow-md'>

                <img src={image} alt={cardName} className=" rounded-full w-24 h-24 object-cover  justify-center justify-self-center mt-5" />

            <hr className=' w-[180px]  justify-self-center mt-5'/>


            <div className="p-4 justify-self-center">
                <h3 className="text-xl font-semibold text-gray-800">{cardName}</h3>
                <p className="text-sm text-gray-600 mt-1">Status: <span className={status === 'Ativo' ? 'text-green-500' : 'text-red-500'}>{status}</span></p>

            </div>
            </div>



            <div className="flex w-full items-center  ">
                <div className='flex w-full m-1  justify-around'>
                    <BotaoCardExcluirGrid />
                    <BotaoCardEditarGrid />

                </div>


            </div>
        </div>
    );
};


export default Card;
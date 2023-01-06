import React from 'react'

export const Perguntas = ({time, nome, pergunta, ...props}) => {
    return (
        <>
        <li className="mb-10 ml-6">            
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white  ">
                
            </span>
            <div className="justify-between items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm sm:flex ">
                <time className="mb-1 text-xs font-normal text-gray-600 sm:order-last sm:mb-0 md:mb-16 ml-2">
                    {time}
                </time>
                <div className="text-lg font-semibold text-gray-500 ">                            
                    <span className="bg-gray-100 text-gray-700 text-lg font-semibold mr-2 px-1 py-0.5 rounded dark:bg-gray-600 ">
                    <span className="text-gray-900">{nome}</span> mandou uma pergunta para o grupo
                    </span><br />
                    <p className="text-justify">
                        {pergunta}
                    </p>
                </div>
            </div>
        </li>
        </>
    )
}

export const Resposta = ({time, nome, referencia, resposta, ...props}) => {
    return (
        <>
            <li className="mb-10 ml-6">
                <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white  ">
                    
                </span>
                <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                    <div className="justify-between items-center mb-3 sm:flex">
                        <time className="mb-1 text-xs font-normal text-gray-600 sm:order-last sm:mb-0">
                            {time}
                        </time>
                        <div className="text-bases font-normal text-gray-600 flex ">
                            <span className="text-gray-800">{nome}&nbsp;</span> comentou na pergunta de&nbsp;
                            <a href="#" className="font-semibold text-blue-600 dark:text-white hover:underline">
                            {referencia}
                            </a>
                        </div>
                    </div>
                    <div 
                        className="p-3 text-sm italic font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200 "
                    >
                        {resposta}
                    </div>
                </div>
            </li>
        </>
    )
}

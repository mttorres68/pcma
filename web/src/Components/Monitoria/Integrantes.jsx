import React from 'react'

export const Integrantes = ({avatar, nome,matricula}) => {
    return (        
        <li className="py-2 px-4 w-full rounded-t-lg border-b hover:bg-opacity-100  block rounded-xl border border-gray-400 bg-gray-900 p-4 shadow-xl bg-opacity-[0.7] ">
            <div className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-full">
                <span className="font-medium text-gray-900">{avatar}</span>
            </div>
            <span className="ml-3 text-white " >{nome}</span>
            <h6 className=" text-white text-sm font-extrabold">Matricula:
                <span className="text-white font-light p-1 flex-row">
                    {matricula}

                </span>
            </h6>
            
        </li>
        
    )
}

import * as Dialog from "@radix-ui/react-dialog";

import React from 'react'

export const Freq = ({Titulo}) => {
    return (
        <>
            <Dialog.Trigger className='hover:text-black rounded-sm shadow-sm shadow-indigo-600 hover:shadow'>
                <span className="rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:bg-indigo-400 transition-all ">
                    {Titulo}
                </span>

            </Dialog.Trigger>
        </>
    )
}

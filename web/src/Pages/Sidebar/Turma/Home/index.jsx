import { Navbar } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom'
import * as Dialog from "@radix-ui/react-dialog";
import { CriarAaviso, HomeTurmaLi } from '../../../../Components/Monitoria/HomeTurmaLi';
import { CriarAviso } from './CriarAviso';
import { Freq } from '../../../../Components/Monitoria/Freq'
import Frequencia from './Frequencia/Frequencia';



export default function HomeTurma() {   
    const { id }  = useParams()

    return (
        <div className="justify-center m-4">            
            <Navbar
                aria-label="Site nav"
                className="mx-auto flex max-w-3xl items-center justify-between p-4 py-2 px-4 lg:px-8 lg:py-4 mt-6 text-center font-extrabold bg-indigo-500 bg-opacity-30 relative border-collapse border-gray-200  shadow-2xl"
            >
                <NavLink
                    to={`/Turma/Inicio/${id}`}
                    className="inline-flex h-10 w-50 items-center justify-center  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:bg-indigo-400 rounded-lg"
                >
                    <h1  className="flex text-2xl font-semibold text-gray-100 ">Monitoria</h1>
                </NavLink>
                

                <ul className="flex items-center gap-2 text-gray-100 ">
                    <li>
                        <Dialog.Root>
                            <CriarAaviso 
                                Titulo="Criar aviso"
                            />
                            <Dialog.Portal>
                                <Dialog.Overlay className="bg-black/60 inset-0 fixed"/>
                                <CriarAviso />
                            </Dialog.Portal>
                        </Dialog.Root>
                    </li>
                    <HomeTurmaLi 
                        to={`/Turma/Inicio/${id}/Chatgeral`}
                        Titulo="Chat geral"
                    />
                    <li>
                        <Dialog.Root>
                            <Freq  Titulo="Frequência"/>
                            <Dialog.Portal>
                                <Dialog.Overlay className="bg-black/60 inset-0 fixed"/>
                                <Frequencia />
                            </Dialog.Portal>
                        </Dialog.Root>

                    </li>
                </ul>
            </Navbar>

            <div>
                <Outlet/>
            </div>
            
        </div>
    )
}

import React from 'react'
import { Integrantes } from '../../../../../components/Monitoria/Integrantes'

export default function Pessoas() {
    return (
        <div className="mx-auto max-w-3xl">
            <ol className= "bg-gray-200 rounded-lg bg-opacity-80 relative border-ls border-gray-200 mt-8">
                <div className="mb-5">
                    <div className="p-2">
                        <span className="ml-4  font-semibold text-xl">Monitor</span>
                    </div>
                    <Integrantes 
                        nome="ERIC MENDES DE SOUSA"
                        avatar="EM"
                    />
                    <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"/>
                    <div className="mt-5  font-semibold text-xl">
                        <span className="ml-4">Colegas</span>
                        <hr className="border-collapse rounded-sm mt-4 "/>
                    </div>
                </div>
                <Integrantes 
                    nome="João Pedro Neto"
                    avatar="JP"
                />
                <Integrantes 
                    nome="João Pedro Neto"
                    avatar="JP"
                />
                <Integrantes 
                    nome="João Pedro Neto"
                    avatar="JP"
                />
                <Integrantes 
                    nome="João Pedro Neto"
                    avatar="JP"
                />
                <Integrantes 
                    nome="João Pedro Neto"
                    avatar="JP"
                />
                <Integrantes 
                    nome="João Pedro Neto"
                    avatar="JP"
                />
                <Integrantes 
                    nome="João Pedro Neto"
                    avatar="JP"
                />
                <Integrantes 
                    nome="João Pedro Neto"
                    avatar="JP"
                />
                <Integrantes 
                    nome="João Pedro Neto"
                    avatar="JP"
                />
                <Integrantes 
                    nome="João Pedro Neto"
                    avatar="JP"
                />
                <Integrantes 
                    nome="João Pedro Neto"
                    avatar="JP"
                />
                
            </ol>
        </div>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'
// import { IconError } from '../../Components/Icons'

export const Error = ({IconError}) => {
    return (
        <div className="mx-auto max-w-screen-xl ">
            <section className="pt-32 pb-36 overflow-hidden bg-gray-300 relative bg-no-repeat bg-cover rounded-md m-6">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap -m-8">
                    <div className="w-full md:w-1/2 p-8">
                        <div className="flex flex-col justify-between h-full">
                        <div className="mb-8">
                            <h2 className="mb-6 text-16xl text-indigo-600 font-bold tracking-px-2n leading-none">404</h2>
                            <h3 className="mb-4 text-3xl font-bold font-heading leading-snug">Algo está errado!</h3>
                            <p className="text-lg text-gray-600 font-medium leading-normal md:max-w-md">A página que você está procurando não foi encontrada! Tente outra coisa ou volte para a página inicial.</p>
                        </div>
                        <div>
                            <div className="inline-flex items-center text-center font-semibold text-indigo-600 hover:text-indigo-700 leading-normal">
                            <svg className="mr-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d={IconError} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                            <Link to="/">Voltar para a página inicial</Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="w-full md:w-2/6 p-4 self-end">
                        <img className="mx-auto transform hover:-translate-x-4 transition ease-in-out duration-1000" src="../../404Error.png" alt=""/>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

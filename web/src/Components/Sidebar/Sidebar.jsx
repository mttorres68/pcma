import { NavLink } from "react-router-dom"
import * as Dialog from "@radix-ui/react-dialog";
import { memo } from "react";

export const SiderbarComponete = memo(({to,d,...props} )=> {

    return (            
        <>
            <NavLink
                to={to}
                className="flex items-center p-2 text-base font-bold text-white rounded-lg hover:bg-purple-800 duration-o hover:duration-500"
            >
            <svg
                className="w-6 h-6 text-white transition-shadow shadow-md duration-75 group-hover:text-black "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    // CAMINHO DO ICON
                    d={d}
                />
            </svg>
            <span className="ml-3">{props.span}</span>
            </NavLink>
        </>
        
    )
})

export const CriarEditalComponente = ({d,...props}) =>{

    return(
        <>
            <Dialog.Trigger  className="flex items-center p-2 text-base font-bold text-white rounded-lg hover:bg-purple-800 duration-0 hover:duration-500">
            <svg
                    className="w-6 h-6 text-white transition-shadow shadow-md duration-75 group-hover:text-black "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        // CAMINHO DO ICON
                        d={d}
                    />
            </svg>
            <span className="ml-3">{props.span}</span>
            </Dialog.Trigger>
        </>
    )
}

export const CriarTurmaComponente = ({span, d}) =>{
    return(
        <>
            <Dialog.Trigger className="flex text-base font-bold hover:bg-purple-800 rounded p-1 shadow-lg duration-0 hover:duration-500">
            <svg
                className="w-6 h-6 text-white transition-shadow shadow-md duration-75 group-hover:text-black "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    // CAMINHO DO ICON
                    d={d}
                />
            </svg>
            <span className="ml-3 ">{span}</span>
                
            </Dialog.Trigger>
        </>
    )
}

export const DropMenu = ({to,span}) =>{
    return(
        <>
            <NavLink 
                to={to}
                className="flex text-base font-bold hover:bg-purple-800 rounded p-2 mb-2 ml-4 shadow-lg duration-0 hover:duration-500"
            >  
            <span>
                {span}
            </span>

            </NavLink>
        
        </>
    )
}
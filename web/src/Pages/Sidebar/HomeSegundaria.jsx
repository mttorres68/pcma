import React, { useState } from "react";
import { HiMenuAlt3, HiUserGroup } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { FiHome } from "react-icons/fi";
import { BiLayer,BiFile } from "react-icons/bi";
import { NavLink, Outlet } from "react-router-dom";
import { BsBoxArrowRight } from "react-icons/bs";
import { useAuth } from "../../Contexts/Auth/useAuth";



export const HomeSegundaria = () => {
    const  { user,logout} = useAuth()
    const menus = [
        { name: "Inicio", link: "/TelaSegundaria", icon: FiHome },
        { name: "Monitorias", link: "/TelaSegundaria/Monitorias", icon: MdOutlineDashboard },
        { name: "Editais", link: "/TelaSegundaria/Editais", icon: BiLayer },
        { name: "Relatório", link: "/TelaSegundaria/Relatorio", icon: BiFile, margin: true },
        { name: "Participantes", link: "/TelaSegundaria/Candidatos", icon: HiUserGroup },
        { name: "Conta", link: "", icon: AiOutlineUser, margin:true },
    ];
    const [open, setOpen] = useState(true);


    return (
        <section className="flex gap-6">
        <div
            className={`bg-[#0e0e0e] min-h-screen ${
                open ? "w-72" : "w-16"
            } duration-500 text-gray-100 px-4`}
        >
            <div className="py-3 flex justify-between">
                <span className={!open ?"hidden duration-500" :""}>PCMA-IFPI</span>
                <HiMenuAlt3
                    size={26}
                    className="cursor-pointer"
                    onClick={() => setOpen(!open)}
                    />
            </div>
            <div className="mt-4 flex flex-col gap-4 relative">
                {menus?.map((menu, i) => (
                    <NavLink
                        to={menu?.link}
                        key={i}
                        className={` ${
                            menu?.margin && "mt-5"
                        } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                    >
                        <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                        <h2
                            style={{
                            transitionDelay: `${i + 3}00ms`,
                            }}
                            className={`whitespace-pre duration-500 ${
                            !open && "opacity-0 translate-x-28 overflow-hidden"
                            }`}
                        >
                            {menu?.name}
                        </h2>
                        <h2
                            className={`${
                            open && "hidden"
                            } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                        >
                            {menu?.name}
                        </h2>
                    </NavLink>
                ))}
                    <button
                        onClick={logout}
                        className=" group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md">
                        <div>{React.createElement(BsBoxArrowRight,{size:"20"})}</div>
                        <h2
                            style={{
                                transitionDelay: `1000ms`
                            }}
                            className={`whitespace-pre duration-500 ${
                                !open && "opacity-0 translate-x-28 overflow-hidden"
                            }`}
                        >
                            Sair
                        </h2>
                        <h2
                            className={`${
                            open && "hidden"
                            } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                        >
                            Sair
                        </h2>
                    </button>                    
                </div>
            </div>
        <div className="m-3 text-xl text-gray-900 font-semibold">
            <Outlet />
        </div>
        </section>
    );
};

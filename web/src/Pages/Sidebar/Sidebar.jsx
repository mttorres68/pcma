import { 
    ChevronDown, 
    ChevronRight, 
    IconConta, 
    IconEdital, 
    IconHome, 
    IconMonitoria, 
    IconParticipantes, 
    IconRelatorios 
} from "../../Components/Icons"
import { CriarEditalComponente, CriarTurmaComponente, DropMenu, SiderbarComponete } from "../../Components/Sidebar/Sidebar"
import { setTipoUsuarioFuc } from "../../Components/localStorage";
import { DropdownMenu } from "../../Components/Button";
import { CriarEdital } from "./Edital/CriarEdital";
import * as Dialog from "@radix-ui/react-dialog";
import { NavLink, Outlet } from "react-router-dom";
import { memo, useState } from "react";
import { CriarTurma } from "./Turma/CriarTurma";



export const Sidebar = memo(() =>{
    const [openChevron, setOpenChevron] = useState(false)
    
    console.log(openChevron);
    return (
        <div>
            <div className="flex m-4 gap-2">
                <aside aria-label="Sidebar">
                    <div className="overflow-y-auto py-2 px-1 bg-indigo-500 bg-opacity-30 rounded-lg">
                        <ul className="space-y-6">
                            <li>
                                <SiderbarComponete
                                    to={"/SideBar"}
                                    span="Home"
                                    d={IconHome}
                                />
                            </li>
                            <li className="cursor-pointer ">
                                <button  onClick={() => setOpenChevron(!openChevron)}>
                                    <DropdownMenu 
                                        span="Monitoria"
                                        d={IconMonitoria}
                                        IconDrop={openChevron ? ChevronDown : ChevronRight }
                                    />

                                </button>
                                <div className={openChevron ? "bg-indigo-700 text-left shadow-indigo-600 shadow-sm rounded-md text-white  bg-opacity-60 duration-700 transition-all ease-linear ": "invisible hidden"}>
                                    <ul className="space-y-1 duration-700 transition-all ease-linear p-1">
                                        <li >
                                            <DropMenu 
                                                to="/SideBar/Turma"
                                                span="Turma"
                                            />
                                        </li>
                                        <li 
                                            className=" hover:bg-purple-800 rounded p-1 ml-4 shadow-lg duration-0 hover:duration-500"
                                        >
                                            <Dialog.Root>
                                                    <CriarTurmaComponente 
                                                        span="Criar Turma"
                                                    />
                                                <Dialog.Portal>
                                                    <Dialog.Overlay className="bg-black/60 inset-0 fixed"/>
                                                    <CriarTurma/>
                                                </Dialog.Portal>
                                            </Dialog.Root>
                                        </li>
                                    </ul>
                                </div>
                            </li>                            
                            <li>
                                <SiderbarComponete
                                    to={"/Relatorio"}
                                    span="Relatorio"
                                    d={IconRelatorios}
                                />
                            </li>
                            <li>
                                <SiderbarComponete
                                    to="/SideBar/Candidados"
                                    span="Candidatos"
                                    d={IconParticipantes}
                
                                />
                            </li>
                            <li className={!setTipoUsuarioFuc() ?"invisible hidden" : "visible "}>
                                <Dialog.Root >
                                    <CriarEditalComponente
                                        span="Criar edital"
                                        d={IconEdital}
                                    />
                                    <Dialog.Portal >
                                        <Dialog.Overlay  className="bg-black/60 inset-0 fixed" />
                                            <CriarEdital />
                                    </Dialog.Portal>
                                </Dialog.Root>
                
                            </li>
                            <li>
                                <SiderbarComponete
                                    to={"/#"}
                                    span="Conta"
                                    d={IconConta}
                                />
                            </li>
                        </ul>
                    </div>
                </aside>
                <div className="">
                    <Outlet />
                </div>                
            </div>
        </div>
    )
})
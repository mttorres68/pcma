import { Navbar } from "@material-tailwind/react"
import { useEffect, useState } from "react"
import { CardTurma } from "../../../Components/Card/Card"
import { Api } from "../../../Services/api";
import * as Dialog from "@radix-ui/react-dialog";
import { CriarTurma } from "./CriarTurma";
import { CriarTurmaComponente } from "../../../Components/Sidebar/Sidebar";
import { IconEdital } from "../../../Components/Icons";

export const Turma = () =>{
    const [matricula, setMatricula] = useState(() => {
        const matri = JSON.parse( window.localStorage.getItem('u'))
        return matri.matricula
    })
    const [turma, setTurma] = useState([]);

    useEffect(() => {
        getTurmas()
    }, [])
    
    async function getTurmas(){
        await Api.get(`Turma/${matricula}`)
            .then(response => setTurma(response.data))
    }

    console.log(turma);

    return (
        <div className="justify-center m-4">
            <Navbar
                aria-label="Site nav"
                className=" flex max-w-3xl items-center justify-between p-4 py-2 px-4 lg:px-8 lg:py-4 mt-6 text-center font-extrabold bg-gray-900  relative border-collapse border-gray-200  shadow-2xl"
            >                
                <div                    
                    className="inline-flex h-10 w-50 items-center justify-center  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:bg-indigo-400 rounded-lg"
                >
                </div>
                <ul className="flex items-center gap-2 sm:gap-6 md::gap-12 lg:gap-24 text-gray-100 ">
                    <li  className="flex text-2xl font-semibold text-gray-100 ">PCMA-Monitorias Acadêmicas</li>
                    <li>
                        <Dialog.Root>
                            <CriarTurmaComponente 
                                span="Criar uma nova turma"
                                d={IconEdital}
                            />
                            <Dialog.Portal>
                                <Dialog.Overlay className="bg-black/60 inset-0 fixed"/>
                                <CriarTurma />
                            </Dialog.Portal>
                        </Dialog.Root>
                    </li>
                    {/* <li>
                        <Dialog.Root>
                            <CriarTurmaComponente 
                                span="Participar da Turma"
                            />
                        </Dialog.Root>
                    </li> */}
                </ul>
            </Navbar>
            <div className="container mx-auto">
                <header className="justify-center grid grid-cols-1 text-center m-2 text-white md:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-4 ">
                    {turma.map((el,index) =>{
                        return(
                            <CardTurma 
                                key={index}
                                to={`/Turma/Inicio/${el.codigo}`}
                                curso={el.cursos.nome}
                                disciplina={el.disciplinas.nome}
                                monitor={el.monitores.usuarios.nome}
                            />
                        )
                    })}
                </header>
            </div>
        </div>
    )
}


// className="mx-auto bg-indigo-500 bg-opacity-30 rounded-lg text-gray-100 font-extrabold text-xl lg:font-extrabold lg:text-4xl md:font-extrabold md:text-2xl border-l border-gray-200"
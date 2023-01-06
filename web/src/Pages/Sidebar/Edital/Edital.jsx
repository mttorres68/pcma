import { ButtonEditar, ButtonExcluir} from "../../../Components/Button";
import { setTipoUsuarioFuc } from "../../../Components/localStorage";
import { IconEdital, IconEditar, IconExluir,  } from "../../../Components/Icons";
import { InputForm } from "../../../Components/Input/Input";
import { TextArea } from "../../../Components/TextArea"
import { Card } from "../../../Components/Card/Card";
import { Alert } from "@material-tailwind/react";
import * as Dialog from "@radix-ui/react-dialog";
import { Api } from "../../../Services/api"
import { Navbar } from "@material-tailwind/react"
import { useEffect, useState, memo } from "react"
import { VisaoAluno } from "../VisaoAluno"
import { CriarEdital } from "./CriarEdital";
import { CriarEditalComponente } from "../../../Components/Sidebar/Sidebar";

export const Edital = memo(() => {
    const [edital, setEdital] = useState([]);
    const [alertEx, setAlert] = useState([]);
    const [editalForm, setEditalForm] = useState("");
    const [edtialAtulizar, setAtualizar] = useState("");
    const [matricula, setMatricula] = useState(() => {
        const matri = JSON.parse( window.localStorage.getItem('u'))
        return matri.matricula
    })

    useEffect(() => {
        getEdital()
    }, []);

    /**
        *!EDITAL
        **BUSCA EDITAIS NO BANCO
        *?OK
    */
    async function getEdital(){
        await Api.get(`Edital/${matricula}/busca`).then(
            response =>{
                setEdital(response.data);
            }
        )
    }

    /**
        *!EDITAL
        **ATUALIZAR
        *?OK
    */
    async function handleSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData); 
        let status       

        try {
            await Api.put(`Atualizar/${editalForm}/edital`, {
                vagas: Number(data.vagas),
                dataInscricao: data.dataInscricao,
                descricaoEdital: data.descricaoEdital
            }).then(response =>  status = response.status)
            
            if(status == 200){
                setAtualizar("Edital atualizado com sucesso!");
                // navigate('/Edital/atualizado')
                
            }
        } catch (error) {
            alert(error)
        }
    }

    /**
        *!EDITAL
        **DELETE
        *?OK
    */
    async function Excluir(idEdital){
        try { await Api.delete(`Edital/${idEdital}/delete`).then(
                response => {
                    setAlert(response.status);
                })
            } catch (error) {
                if(!error){
                    Alert(error)
                }
            }
        getEdital()
    }

    console.log(edital);
    return(
        <div className="justify-center m-4">
            <Navbar
                aria-label="Site nav"
                className=" flex max-w-3xl items-center justify-between p-4 py-2 px-4 lg:px-8 lg:py-4 mt-6 text-center font-extrabold bg-gray-900  relative border-collapse border-gray-200  shadow-2xl"
            >                
                <div                    
                    className="inline-flex h-10 w-50 items-center justify-center  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:bg-indigo-400 rounded-lg"
                >
                    <h1  className="flex text-2xl font-semibold text-gray-100 ">Editais</h1>
                </div>
                <ul className="flex items-center gap-2 text-gray-100 ">
                    <li className={!setTipoUsuarioFuc() ? "hidden" : "visible"}>
                        <Dialog.Root>
                            <CriarEditalComponente 
                                span="Criar um novo Edital"
                                d={IconEdital}
                            />
                            <Dialog.Portal>
                                <Dialog.Overlay className="bg-black/60 inset-0 fixed"/>
                                <CriarEdital />
                            </Dialog.Portal>
                        </Dialog.Root>
                    </li>
                </ul>
            </Navbar>
            <div className="container mx-auto">
                <div>                    
                    <div>
                        <div className={!setTipoUsuarioFuc() ? "visible" : "hidden"}>
                            <VisaoAluno />
                        </div>
                        <div className={!setTipoUsuarioFuc() ? "invisible hidden" : "m-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-4 "}>
                            {edital.map((e, index) =>{
                                return <Card
                                    key={e.idEdital}
                                    curso={e.cursoSigla}
                                    disciplina={e.editalDisciplina?.nome}
                                    vagas={e.vagas}
                                    data={e.dataInscricao}
                                    descricao={e.descricaoEdital}
                                    to={e.edital}
                                    children={
                                        <div>                                                
                                            <div className= "mt-2 items-center justify-between flex lg:space-x-2">                                
                                                <ButtonExcluir
                                                    span="Exluir"
                                                    d={IconExluir}
                                                    key={`key-${index}`}
                                                    id={e.idEdital}
                                                    value={e.idEdital}
                                                    onClick={() => Excluir(e.idEdital)}
                                                />
                                                <Dialog.Root>
                                                    <ButtonEditar
                                                        span="Editar"
                                                        d={IconEditar}
                                                        key={`keyE-${index}`}
                                                        id={e.idEdital}
                                                        value={e.idEdital}
                                                        onClick={() => setEditalForm(e.idEdital)}                                
                                                    />
                                                    <Dialog.Portal>
                                                        <Dialog.Overlay className="bg-black/60 inset-0 fixed"/>
                                                        <Dialog.Content
                                                            className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25"
                                                        >
                                                            <Dialog.Title
                                                                className="text-3xl mb-4 font-black uppercase"
                                                            >
                                                                Editar edital
                                                            </Dialog.Title>
                                                                <form onSubmit={handleSubmit}>
                                                                    <InputForm
                                                                        label="Vaga(s)"
                                                                        type="number"
                                                                        name="vagas"
                                                                        placeholder="Informe o número de vaga(s)"
                                                                    />
                                                                    <InputForm
                                                                        label="Data de Inscrição"
                                                                        name="dataInscricao"
                                                                        placeholder="Informe uma nova data"
                                                                    />
                                                                    <TextArea
                                                                        label="Descrição do edital"
                                                                        name="descricaoEdital"
                                                                        id="descricao"
                                                                        placehoolder="Descrição"
                                                                    />
                                                                    <div>
                                                                        <span className="">
                                                                            {edtialAtulizar}
                                                                        </span>
                                                                        <div className="mt-4 flex justify-end gap-4">
                                                                            <Dialog.Close type="button" className="bg-gray-700 px-5 h-12 rounded-md font-semibold hover:bg-gray-800">
                                                                                Cancelar
                                                                            </Dialog.Close>
                                                                            <button
                                                                                type="submit"
                                                                                className="bg-[#1E88E5] px-5 h-12 rounded-md font-semibold hover:bg-blue-800 "
                                                                            >
                                                                                Confirmar
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </Dialog.Content>
                                                        </Dialog.Portal>
                                                </Dialog.Root>
                                            </div>
                                        </div>
                                    }
                                />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})
import * as Dialog from "@radix-ui/react-dialog";
import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import { InputForm } from "../../../../Components/Input/Input";
import { TextArea } from "../../../../Components/TextArea";
import { Api } from "../../../../Services/api";


export const CriarAviso = () => {
    const [clearValue, setValue] = useState({titulo:'', descricao:''})
    const [status, setStatus] = useState();
    const { id }  = useParams()


    const handleSubmit = async (event) =>{
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        try {
            await Api.post(`Publicacao/${id}`, {
                titulo: data.titulo,
                descricao:data.descricao
            }).then(response => setStatus(response.status));
            alert('Aviso criado com sucesso!');
            if(!status){
                setValue({titulo:'', descricao: ''})
            }
        } catch (error) {
            
        }
    }

    return (
        <Dialog.Content
            className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25"
        >
            <Dialog.Title className="text-3xl font-black uppercase">
                Criar aviso para turma
            </Dialog.Title>
            <form onSubmit={handleSubmit}  className="mt-2 flex-col gap-2">
                <div className="grid grid-row-2 gap-4">
                    <div className="flex flex-rows gap-2">
                        <InputForm
                            label="Titulo"
                            placeholder="Aula de sgbd"
                            name="titulo"
                            onChange={(e) => setValue(e.target.value)}
                            value={clearValue.titulo}
                        />
                    </div>
                    <div className="flex flex-rows gap-2">
                        <TextArea 
                            label="Descrição"
                            name="descricao"
                            id="descricao"
                            cols="30"
                            rows="3"
                            onChange={(e) => setValue(e.target.value)}
                            value={clearValue.descricao}
                        />
                    </div>
                    
                    <div>                        
                        <div className="mt-2 flex justify-end gap-6">
                            <Dialog.Close type="button" className="bg-gray-700 px-5 h-12 rounded-md font-semibold hover:bg-gray-800">
                                Cancelar
                            </Dialog.Close>
                            <button 
                                type="submit"
                                className="bg-[#1E88E5] px-5 h-12 rounded-md font-semibold hover:bg-blue-800"
                            >
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
                
            </form>


        </Dialog.Content>
    )
}

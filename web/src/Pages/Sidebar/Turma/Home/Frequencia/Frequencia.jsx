import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { InputForm } from "../../../../../Components/Input/Input";
import { TextArea } from "../../../../../Components/TextArea";
import { Api } from "../../../../../Services/api";

export default function Frequencia() {
    const [clearValue, setValue] = useState({
        dtAtividade:'',
        hrInicio:'',
        hrFIm:'',
        ativDesepenhada:'',
        observacao:''
    });
    const [status, setStatus] = useState();
    const {id} = useParams();
    
    const HandleSubmit =  async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        try {
            await Api.post(`Frequencia/${id}`, {
                dtFrequencia: data.dtAtividade,
                hrInicio:data.hrInicio,
                hrFim:data.hrFim,
                ativDesepenhada:data.ativDesempenhada,
                observacao:data.observacoes
            }).then(response => setStatus(response.status))
            alert('Atividade registrada com sucesso!')
            if(!status){
                setValue({
                    dtAtividade:'',
                    hrInicio:'',
                    hrFIm:'',
                    ativDesepenhada:'',
                    observacao:''
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Dialog.Content 
            className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25"
        >
            <Dialog.Title className="text-3xl font-black uppercase">
                Registrar Atividade
            </Dialog.Title>

            <form onSubmit={HandleSubmit} className="mt-2 flex-col gap-2">
                <InputForm 
                    type="Date"
                    label="Data da atividade:"
                    placeholder="12/12/2023"
                    name="dtAtividade"
                    onChange={(e) => setValue(e.target.value)}
                    value={clearValue.dtAtividade}
                />
                    <span>Horários</span>
                <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        <InputForm                             
                            label="Inicio:"
                            type="time"
                            name="hrInicio"
                            onChange={(e) => setValue(e.target.value)}
                            value={clearValue.hrInicio}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <InputForm 
                            label="Fim:"
                            type="time"
                            name="hrFim"
                            onChange={(e) => setValue(e.target.value)}
                            value={clearValue.hrFIm}
                        />
                    </div>
                </div>
                <InputForm 
                    label="Atividade Desempenhada:"
                    placeholder="Tirar dúvidas dos estudantes acerca das atividades"
                    name="ativDesempenhada"
                    onChange={(e) => setValue(e.target.value)}
                    value={clearValue.ativDesepenhada}
                />
                <TextArea
                    label="Observações:"
                    name="observacoes"
                    id="observacoes"
                    onChange={(e) => setValue(e.target.value)}
                    value={clearValue.observacao}
                />
                <div>                        
                    <div className="mt-2 flex justify-end gap-6">
                        <Dialog.Close type="button" className="bg-gray-700 px-5 h-12 rounded-md font-semibold hover:bg-gray-800">
                            Cancelar
                        </Dialog.Close>
                        <button 
                            type="submit"
                            className="bg-[#1E88E5] px-5 h-12 rounded-md font-semibold hover:bg-blue-800"
                        >
                            Registrar
                        </button>
                    </div>
                </div>

            </form>

        </Dialog.Content>
    )
}

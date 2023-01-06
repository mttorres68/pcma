import React, { useEffect, useState } from 'react'
import { SelectInput } from '../../../Components/Input/Input';
import { Integrantes } from '../../../Components/Monitoria/Integrantes';
import { Api } from "../../../Services/api";


export const Participante = () => {
    const [partici, setParticipante] = useState([]);
    const [editais, setEditais] = useState([])
    const [tipoEdital, setTipoEdital] = useState('')

    
    async function getEditais(){
        await Api.get('Edital')
        .then(response  => setEditais(response.data))
    }
    
    async function getParticipantes(id){
        if(id){
            await Api.get(`Participantes/${id}/part`)
            .then(response => setParticipante(response.data))
            
        }else{
            console.log('Nada');
        }
    }
    useEffect(()=>{
        try{
            getEditais()            
        }catch(error){
            console.log(error);
        }
    },[]);

    useEffect(() =>{
        if(tipoEdital){
            getParticipantes(tipoEdital)
        }
    },[tipoEdital])
    

    return (
        <div className="mx-auto max-w-3xl">            
            <nav className="mx-auto text-gray-100 max-w-3xl items-center justify-between p-4 py-2 px-4 lg:px-8 lg:py-4 mb-4 text-center font-extrabold bg-gray-900 rounded-lg bg-opacity-95 relative border-collapse border-gray-500 hover:border-purple-800 shadow-2xl uppercase">
            <label htmlFor="tipo">Selecione o Curso</label>
            <SelectInput   
                
                name='tipo'
                value={tipoEdital}
                onChange={e => setTipoEdital(e.target.value)}
            >
                <option disabled value="">Selecione o Curso</option>
                {editais.map((e) =>(
                    <option
                        key={e.idEdital}
                        value={e.idEdital}
                        onClick={() => getParticipantes(e.idEdital)}
                    >
                        {e.cursoSigla}
                    </option>
                ))}
            </SelectInput>
            </nav>
            <ol className= "relative border-ls border-gray-200 ml-4 space-y-1">
                {partici.map((e) => {
                    return (
                        <Integrantes 
                            key={e.id}
                            nome={e.usuarios_part.nome}
                            matricula={e.usuarios_part.matricula}
                        />
                    )
                })}
                
            </ol>
        </div>
    )
}

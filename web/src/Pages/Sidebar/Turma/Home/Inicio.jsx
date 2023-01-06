import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Publicacao } from '../../../../Components/Monitoria/Publicacao'
import { Api } from '../../../../Services/api'

export default function Dashboard() {
    const [publicacao, setPublicacao] = useState([])
    const { id }  = useParams()

    useEffect(() => {
        getPublicacao()
    }, [])

    async function getPublicacao(){
        await Api.get(`Publicacoes/${id}`)
            .then(response => setPublicacao(response.data))
    }

    return (
        <div className="mx-auto max-w-3xl">
            <ol className= "bg-gray-200 rounded-lg bg-opacity-80 relative border-l border-gray-200 mt-8 p-4 ">
                {publicacao.map((el, index) => {

                    return(
                        <Publicacao 
                            key={index}
                            Titulo={el.titulo}
                            Descricao={el.descricao}
                            Data={el.dtPublicao}
                        />
                    )
                })}
                
            </ol>
        </div>
    )
}

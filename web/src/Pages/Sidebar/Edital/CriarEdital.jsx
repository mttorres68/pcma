import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { InputForm, SelectInput } from "../../../Components/Input/Input"
import { TextArea } from "../../../Components/TextArea";
import { Api } from "../../../Services/api";



export const CriarEdital = () => {

    const [curso, setCurso] = useState('');
    const [listCurso, setListCurso] = useState([]);
    const [disciplina, setDisciplina] = useState('');
    const [listDisciplina , setListDisciplina] = useState([]);
    const [status, setStatus] = useState();
    const [matricula, setMatricula] = useState(() => {
        const matri = JSON.parse( window.localStorage.getItem('u'))
        return matri.matricula
    })


    const [a, setA] = useState('')
    const [clearValue, setValue] = useState({
        inscricao: '',
        vaga: '',
        sigla:'',
        descricaoEdital:'',
    });

    async function getCurso(){
        await Api.get('Curso')
            .then(response =>{
                setListCurso(response.data)
            });
    }

    async function getDisciplina(id){
        await Api.get(`disciplina/${id}`)
            .then(response =>{
                setListDisciplina(response.data)
            });
    }

    useEffect(() => {
        getCurso();
    }, []);

    useEffect(() => {
        if(curso){
            getDisciplina(curso);
        }
    }, [curso]);

    const  handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);        

        try {
            await Api.post(`Edital/${curso}/${disciplina}/${matricula}`,{
                dataInscricao: data.inscricao,
                vagas: Number(data.vaga),
                cursoSigla: data.sigla,
                descricaoEdital: data.descricaoEdital
            }).then(response => setStatus(response.status));

            alert('Edital criado com sucesso!');
            if(!status){
                setValue({
                    inscricao: '',
                    vaga: '',
                    sigla:'',
                    descricaoEdital:'',
                });
            }
        }catch(error){
            console.log(error);
        }
    }

    console.log(a);
    return(        
            <Dialog.Content 
                className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25"
            >
                <Dialog.Title
                    className="text-3xl font-black uppercase"
                >
                    Lançar edital
                </Dialog.Title>

                <form onSubmit={handleSubmit} className="mt-2 flex-col gap-2">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <SelectInput
                                label="Selecione o curso"
                                name="curso"
                                value={curso}
                                onChange={e => setCurso(e.target.value)}                                
                            >
                                <option disabled value="">Selecione o curso</option>

                                {listCurso.map((e) => (
                                    <option                                        
                                        key={e.id_curso}
                                        value={e.id_curso}
                                    >
                                        {e.nome}
                                    </option>
                                ))}
                            </SelectInput>
                        </div>                    

                        <div className="flex flex-col gap-2">
                            <SelectInput
                                label="Selecione a disciplina"
                                name="disciplina"
                                value={disciplina}
                                onChange={e => setDisciplina(e.target.value)}


                            >
                                <option disabled value="">Selecione a disciplina</option>

                                {listDisciplina.map((e) => (
                                        <option
                                        key={e.id_disciplina}
                                        value={e.id_disciplina}
                                        onClick={e => setA(e.id_curso)}

                                    >
                                        {e.nome}
                                    </option>
                                    ))}
                            </SelectInput>
                        </div>
                    </div>

                    <InputForm                        
                        label="Periodo de inscrições"
                        name="inscricao"
                        placeholder="Informe aqui a data"
                        onChange={(e) => setValue(e.target.value)}
                        value={clearValue.descricaoEdital}
                    />
                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <InputForm
                                label="Vaga(s)"
                                type="number"                                
                                name="vaga"
                                placeholder="Informe a quantidade de vaga(s)"
                                onChange={(e) => setValue(e.target.value)}
                                value={clearValue.vaga}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <InputForm
                                label="Sigla do Curso"
                                name="sigla"
                                placeholder="TADS"
                                onChange={(e) => setValue(e.target.value)}                                
                                value={clearValue.sigla}                              
                            />
                        </div>
                    </div>
                    <TextArea 
                        label="Descrição do edital"
                        name="descricaoEdital"
                        id="descricao"
                        placehoolder="Descrição"
                        onChange={(e) => setValue(e.target.value)}
                        value={clearValue.descricaoEdital}
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
                                Confirmar
                            </button>
                        </div>
                    </div>
                </form>
            </Dialog.Content>
    )
}
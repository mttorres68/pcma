import { Button } from "@material-tailwind/react"
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { InputForm, SelectInput } from "../../../Components/Input/Input";
import {Api}  from "../../../Services/api";

export const Cadastro = () =>{

    const [nome, setNome] = useState("");
    const [matricula, setMatricula] = useState("");
    const [cpf, setCpf] = useState("");
    const [error, setError] = useState("");
    const [tipo, setTipo] = useState([]);
    const [tipoUsuario, SetTipoUsuario] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        Api.get('TipoUsuario')
            .then(response => setTipo(response.data))
    }, [])

    const  handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        if(nome == "" || !matricula || !cpf){
            setError("Preencha todos os campos!");
            return;
        }

        try {
            await Api.post(`usuario/${tipoUsuario}`,{                
                matricula: data.matricula,
                nome: data.nome,
                email: data.email,
                telefone: data.telefone,
                cpf: data.cpf,
                senha: data.senha
            })
            alert("Cadastrado com sucesso!");
            navigate("/")
        }catch(error){
            console.log(error);
            alert('Erro')
        }
    }

    return (
        <>
            <div className="md:grid md:grid-cols-1 grid-cols-1 h-full m-10">
                <section className="mx-auto max-w-6xl py-5 px-12 lg:px-24 mb-24 rounded-lg opacity-80 bg-transparent bg-gray-900">
                    <h1 className="block uppercase tracking-wide text-white font-bold text-lg mb-5 text-center">Registra-se</h1>
                    <hr className="m-2 border-b-1 "/>
                    <form action="" onSubmit={handleSubmit} className="mt-2 flex-col gap-2">
                        <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-x-4">
                            <div  className="flex flex-col gap-2">
                                <InputForm
                                    label="Nome Completo"
                                    name='nome'
                                    placeholder='Maria Miranda'
                                    value={nome}
                                    onChange={(e) => [setNome(e.target.value), setError("")]}
                                />
                            </div>
                            <div  className="flex flex-col gap-2">
                                <InputForm
                                    label="Matricula"
                                    name='matricula'
                                    placeholder='2022113tads16'
                                    value={matricula}
                                    onChange={(e) => [setMatricula(e.target.value), setError("")]}
                                />
                            </div>
                            <div>
                                <InputForm
                                    label='E-mail'
                                    type='email'
                                    name='email'
                                    placeholder='caflo.2022114abc@aluno.ifpi.edu.br'
                                />
                            </div>
                            <div>
                                <InputForm
                                    label='Telefone'
                                    type='tel'
                                    name='telefone'
                                    placeholder='(xx) x-xxxx-xxxx'
                                />
                            </div>
                            <div>
                                <SelectInput 
                                    label='Tipo'
                                    name='tipo'
                                    value={tipoUsuario}
                                    onChange={e => SetTipoUsuario(e.target.value)}
                                >
                                    <option disabled value="">Selecione o tipo</option>
                                    {tipo.map((e) =>(

                                        <option
                                            key={e.id_tipo}
                                            value={e.id_tipo}
                                        >
                                            {e.descricao}
                                        </option>
                                    ))}
                                </SelectInput>
                            </div>
                            <div>
                                <InputForm
                                    label='CPF'
                                    type='text'
                                    name='cpf'
                                    value={cpf}
                                    placeholder='123.321.456-78'
                                    onChange={(e) =>[setCpf(e.target.value), setError("")]}
                                />
                            </div>
                        </div>
                            <div className="items-center justify-center content-center ">
                                <InputForm
                                    label="Senha"
                                    type='password'
                                    name='senha'
                                    placeholder='**********'
                                />
                            </div>                            
                        <div className="justify-center text-red-800 text-center m-4">
                            <label htmlFor="">{error}</label>    
                        </div>
                        <div className="text-center">
                            <Button
                                color="indigo"
                                type="submit"
                                variant="gradient"
                                value="enviar"
                            >
                                Cadastra-se
                            </Button>    
                        </div>
                    </form>
                        <div className="mt-4 justify-center items-center text-center">
                        <hr className="m-2"/>
                        <span className="text-white font-medium space-x-2">já tem cadastro? </span>
                        <Link to="/">
                            <button  
                                type="submit" 
                                className="text-light-blue-600 hover:text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-2 py-2 text-center "
                            >
                                entrar
                            </button>
                            
                        </Link>
                    </div>
                </section>
            </div>
        </>
    )
}
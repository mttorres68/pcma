import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Contexts/Auth/useAuth";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
    const [matricula,setMatricula ] = useState("");
    const [senha,setSenha ] = useState("");
    const [error, setError] = useState("");

    const auth = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        if(!matricula | !senha){
            setError("Preencha todos os campos!");
            return;
        }

        try {
            await auth.authenticate(data.matricula, data.senha);
            navigate('/TelaSegundaria');
        } catch (error) {
            console.log(error);
            console.log('aqui, aqui');
            alert('Matricula ou senha invalida')

        }
        console.log(data.matricula, data.senha);
    }

    return (
        <>
            <main className="md:grid md:grid-cols-1 grid-cols-1 h-full m-10 relative transition duration-300 delay-150">
                <section className="mx-auto max-w-6xl py-12 px-12 lg:px-24  rounded-lg opacity-80 bg-transparent bg-gray-900">
                    <h1 className="block uppercase tracking-wide text-white font-bold text-lg mb-5 text-center">Acessar Conta</h1>
                    <hr className="m-2 border-b-1 "/>
                    <form  onSubmit={handleSubmit} >
                            <label
                                htmlFor='matricula'
                                
                                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                            >
                            Matricula
                            </label>
                            <input
                                
                                name="matricula"
                                placeholder="2022123tads18"
                                value={matricula}
                                onChange={e => [setMatricula(e.target.value), setError('')]}
                                className="w-full bg-white-200 text-black border-2 border-gray-400 rounded-lg py-3 px-8 mb-2 focus:outline-none focus:ring-2 focus:ring-offset-black focus:border-transparent hover:bg-blue-gray-100 placeholder-blue-gray-900"
                            />
                            <label
                                htmlFor='senha'
                                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                            >
                            Senha
                            </label>
                            <input
                                type='password'
                                name="senha"
                                placeholder="******"
                                value={senha}
                                onChange={e => setSenha(e.target.value)}
                                className="w-full bg-white-200 text-black border-2 border-gray-400 rounded-lg py-3 px-8 mb-2 focus:outline-none focus:ring-2 focus:ring-offset-black focus:border-transparent hover:bg-blue-gray-100 placeholder-blue-gray-900"
                            />
                        <div className="text-center text-red-700 font-serif m-2 " >
                            <label htmlFor="">
                                {error}
                            </label>
                        </div>
                        <div  className="text-center">
                        <Button
                            color="indigo"
                            type="submit"
                            variant="gradient"
                            
                        >
                            Entrar
                        </Button>
                        </div>
                    </form>
                    <div className="mt-4 justify-center items-center text-center">
                        <hr className="m-2"/>
                        <span className="text-white font-medium space-x-2">Não tem cadastro? </span>
                        <Link to="/Cadastro">
                            <button  
                                type="submit" 
                                className="text-light-blue-600 hover:text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-2 py-2 text-center "
                            >
                                cadastrar-se
                            </button>
                            
                        </Link>
                    </div>
                </section>
            </main>
        </>
    )
}
import React from 'react'
import { Perguntas, Resposta } from '../../../../../Components/Monitoria/Chat'

export default function ChatGeral() {
    return (
        <div className="mx-auto max-w-3xl">            
            <ol className="relative border-l border-gray-200 dark:border-gray-700 mt-8 p-4">                  
                <li className="mb-10 ml-6">            
                    <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white  ">
                        
                    </span>
                    <div className="justify-between items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm sm:flex ">
                        <time className="mb-1 text-xs font-normal text-gray-600 sm:order-last sm:mb-0 md:mb-16 ml-2">
                            agora mesmo
                        </time>
                        <div className="text-lg font-semibold text-gray-500 ">                            
                            <span className="bg-gray-100 text-gray-700 text-lg font-semibold mr-2 px-1 py-0.5 rounded dark:bg-gray-600 ">
                            <span className="text-gray-900">Maria Silva</span> mandou uma pergunta para o grupo
                            </span><br />
                            <p className="text-justify">
                            Por quê é importante em um sistema de banco de dados armazenar os dados em um arquivo separado de sua definição?
                            </p>
                        </div>
                    </div>
                </li>
                <li className="mb-10 ml-6">
                    <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white  ">
                        
                    </span>
                    <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                        <div className="justify-between items-center mb-3 sm:flex">
                            <time className="mb-1 text-xs font-normal text-gray-600 sm:order-last sm:mb-0">
                                2 horas atrás
                            </time>
                            <div className="text-bases font-normal text-gray-600 flex ">
                                <span className="text-gray-800">André Luís&nbsp;</span> comentou na pergunta de&nbsp;
                                <a href="#" className="font-semibold text-blue-600 dark:text-white hover:underline">
                                    Maria Silva
                                </a>
                            </div>
                        </div>
                        <div 
                            className="p-3 text-sm italic font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200 "
                        >
                            A separação da base de dados em dois arquivos distintos é importante pois a estrutura dos dados muda pouco enquanto que os dados em si mudam muito devido inserção, alteração ou remoção de dados. Assim, o SGBD cria um arquivo para a estrutura dos dados e outro para os dados em si.
                        </div>
                    </div>
                </li>
                <li className="mb-10 ml-6">
                    <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white  ">
                        
                    </span>
                    <div className="justify-between items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                        <div className="justify-between items-center mb-3 sm:flex">
                            <time className="mb-1 text-xs font-normal text-gray-600 sm:order-last sm:mb-0">
                                1 dia atrás
                            </time>
                            <div className="text-bases font-normal text-gray-600 flex ">
                                <span className="text-gray-800">Antônio Carlos&nbsp;</span> comentou na pergunta de&nbsp;
                                <a href="#" className="font-semibold text-blue-600  hover:underline">
                                    Maria Silva
                                </a>
                            </div>
                        </div>
                        <div className="p-3 text-sm italic font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200">
                            A importância do banco de dados para empresa é que ele organiza e armazena as informações sobre um domínio específico, ou seja, realiza o agrupamento de dados que tratam do mesmo assunto e que precisam de segurança.
                        </div>
                        
                    </div>
                </li>
                <Perguntas 
                    nome="Adriano Santos"
                    time="2 dias atrás"
                    pergunta="PERGUNTA"
                />
                <Resposta
                    nome="Miguel Ângelo"
                    referencia="Adriano Santos"
                    time="1 dia atrás"
                    resposta="RESPOSTA"
                />
            </ol>
        </div>
    )
}

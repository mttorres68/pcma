import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import Home from "../Pages/Home/Home";
import { Info } from "../Pages/Home/Info";
import { Login } from "../Pages/Home/Login/Login";
import { Cadastro } from "../Pages/Home/Cadastro/Cadastro";
import { Sidebar } from "../Pages/Sidebar/Sidebar";
import { Edital } from "../Pages/Sidebar/Edital/Edital";
import { Participante } from "../Pages/Sidebar/Participante";
import { Turma } from "../Pages/Sidebar/Turma/Turma";
import HomeTurma from "../Pages/Sidebar/Turma/Home";
import Dashboard from "../Pages/Sidebar/Turma/Home/Inicio";
import ChatGeral from "../Pages/Sidebar/Turma/Home/ChatGeral/chatGeral";
import { ProtectedLayout } from "../Contexts/ProtectedLayout";
import Frequencia from "../Pages/Sidebar/Turma/Home/Frequencia/Frequencia";
import { HomeSegundaria } from "../Pages/Sidebar/HomeSegundaria";
import { Relatorio } from "../Pages/Sidebar/Relatorio/Relatorio";



const Rotas = () => {

    return(
        
        <Fragment>
            <Routes>
                <Route path="/" element={<Home/>}>
                    {/* <Route path="/" element={<Info />}/> */}
                    <Route path="/" element={<Login />}/>
                    <Route path="/Cadastro" element={<Cadastro />} />
                </Route>

                <Route path="/TelaSegundaria" 
                    element={                            
                        <ProtectedLayout>
                            <HomeSegundaria />
                        </ProtectedLayout>
                    }
                >
                    <Route 
                        path="/TelaSegundaria/Monitorias"
                        element={
                            <ProtectedLayout>
                                <Turma />
                            </ProtectedLayout>
                        }
                    />
                    <Route 
                        path="/TelaSegundaria/Editais"
                        element={
                            <ProtectedLayout>
                                <Edital />
                            </ProtectedLayout>
                        }
                    />
                    <Route 
                        path="/TelaSegundaria/Relatorio"
                        element={
                            <ProtectedLayout>
                                <Relatorio/>
                            </ProtectedLayout>
                        }
                    />
                    <Route 
                        path="/TelaSegundaria/Candidatos"
                        element={
                            <ProtectedLayout>
                                <Participante/>
                            </ProtectedLayout>
                        }
                    />


                </Route>

                
                    <Route path="/SideBar" 
                        element={
                            <ProtectedLayout>
                                <Sidebar />
                            </ProtectedLayout>
                        }
                    >
                        <Route 
                            path="/SideBar" 
                            element={
                                <ProtectedLayout >
                                    <Edital/>
                                </ProtectedLayout>
                            }
                        />
                        <Route 
                            path="/SideBar/Candidados" 
                            element={
                                <ProtectedLayout >
                                    <Participante />
                                </ProtectedLayout>
                            }
                        />
                        <Route 
                            path="/SideBar/Turma" 
                            element={
                                <ProtectedLayout >
                                    <Turma/>
                                </ProtectedLayout>
                            }
                        />
                            {/* <Route path="/SideBar/Turma/:turmaId" /> */}
                    </Route>

                    <Route  
                        path="/Turma/Inicio/:id" 
                        element={
                            <ProtectedLayout >
                                <HomeTurma />
                            </ProtectedLayout>
                        }
                    >
                        <Route 
                            path="/Turma/Inicio/:id" 
                            element={
                                <ProtectedLayout >
                                    <Dashboard />
                                </ProtectedLayout>
                            }
                        />
                        <Route 
                            path="/Turma/Inicio/:id/Chatgeral" 
                            element={
                                <ProtectedLayout >
                                    <ChatGeral />
                                </ProtectedLayout>
                            } 
                        />
                        <Route 
                            path="/Turma/Inicio/:id/Frequencia"
                            element={
                                <ProtectedLayout>
                                    <Frequencia/>
                                </ProtectedLayout>
                            }
                        />
                    </Route>
            </Routes>
        </Fragment>
        
    )
}

export default Rotas
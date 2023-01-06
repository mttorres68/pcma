import { Link, NavLink, Outlet} from "react-router-dom";
import { useState, useEffect } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import axios from 'axios';

export const  Home = ()=> {
    const [openNav, setOpenNav] = useState(false);    
    useEffect(() => {
        window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-white ">        
            <Typography
                as="li"
                variant="small"
                className="p-1 font-bold text-white text-base "
                textGradient
            >
                <NavLink to='/' className="hover:underline text-base  flex font-bold items-center  "> Entrar </NavLink>
            </Typography>

            <Typography
                as="li"
                variant="small"            
                className="p-1 font-bold"
            >
                <NavLink to='/Cadastro' className=" hover:underline flex items-center  text-white  text-base "> Cadastra-se </NavLink>
            </Typography>
        </ul>
    );

    return (

        <div>        
            <nav className="mx-auto max-w-screen-xl rounded-lg  py-2 px-4 lg:px-8 lg:py-4 bg-gray-900 bg-opacity-[0.7]  mt-6">
                <div className="container mx-auto flex items-center justify-between text-white uppercase">
                    <Typography                        
                        variant="small"
                        className="mr-4 cursor-pointer py-1.5 text-2xl font-bold"
                    >
                        <NavLink to="/"> <span>Monitorias Acadêmicas - IFPI</span>   </NavLink>
                    </Typography>
                    <div className="hidden lg:block">{navList}</div>
            
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:text-black focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
                <MobileNav open={openNav}>
                    {navList}
                </MobileNav>
            </nav>
            <div>
                <Outlet />
            </div>
            <div>
                <footer className="p-4 bg-gray-900 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6" >
                    <span className="text-sm text-white sm:text-center">© 2022 <a href="https://flowbite.com/" className="hover:underline">PCMA-IFPI</a>. Todos os direitos reservados.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm text-white sm:mt-0">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">Sobre</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Política de Privacidade</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Licenciamento</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contato</a>
                        </li>
                    </ul>
                </footer>
            </div>
        </div>
        
    );
   
}
export default Home;


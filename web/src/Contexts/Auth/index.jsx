import React, {createContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from "./util";
export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const user = getUserLocalStorage();
        if(user){
            setUser(user);
        }
    }, []);

    async function authenticate (matricula, senha){
        const response = await LoginRequest(matricula, senha);
        const payload = { token: response.token,matricula, tipo: response.TipoUser, matri: response.matriculaUser};
        
        setUser(payload);
        setUserLocalStorage(payload);        
    }

    function logout(){
        setUser(null);
        setUserLocalStorage(null);
        navigate('/');

    }


    return (
        <AuthContext.Provider value={{ ...user, authenticate, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

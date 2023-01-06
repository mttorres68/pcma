import { useAuth } from "../../Contexts/Auth/useAuth";
import { Error } from "../../Pages/Error/Error";

export const ProtectedLayout = ({children}) => {

    const auth = useAuth();
        if(!auth.matricula){
            return(
                <>
                    <Error 
                    />
                </>
            )
        }
    return children;
}
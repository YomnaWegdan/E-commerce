import {createContext  , useContext, useState, useEffect} from "react"
import Productdetail from "../Pages/Productdetail";

export const Context = createContext(null);
export const useAppContext = () =>{
    const contextVar = useContext(Context);
    if(contextVar === undefined){
        throw new Error('Context must be within ContextProvider');
    }
    return contextVar;
} 

export const ContextProvider = ({children}) =>{

    const [product , setProduct] = useState(Productdetail)



    return(
        <Context.Provider value={{  
         }}>
        {children}
        </Context.Provider>
    )}


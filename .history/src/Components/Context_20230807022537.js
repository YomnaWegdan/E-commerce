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
    const filterProduct = (product)=>{
        const update = Productdetail.filter((x)=>{
         return( x.Cat=== product )
        })
        setProduct(update)
      }
        const AllProducts = () =>{
          setProduct(Productdetail)
        }

        const searchBtn = (product) => {
    const change = Productdetail.filter((x) => 
    {
      return x.Cat === product
    })
    setProduct(change)
  }

  //Product_detail
  const [detail , setDetail] = useState([])
  const [close , setClose] = useState(false);

  const View = (product)=>{
    setDetail([{...product}])
    setClose(true)
  }






    return(
        <Context.Provider value={{ product , filterProduct, AllProducts , searchBtn , detail , View , c
         }}>
        {children}
        </Context.Provider>
    )}


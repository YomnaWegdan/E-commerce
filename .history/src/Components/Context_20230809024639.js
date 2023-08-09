import {createContext  , useContext, useState} from "react"
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

  //Cart
  const [cart , setCart] = useState([])

  const addToCart = (product)=>{
    const exist = cart.find((x)=>{
      return x.id === product.id
    }) 
    if(exist)
    {
      alert("This Product is already added to cart")
    }else{
      setCart([...cart, {...product, qty:1}])
      alert('Product is added to cart')
    }

  }
  console.log(cart)

  const increment =(product)=>{
    const exist = cart.find((x)=>{
        return x.id === product.id;
    })
    setCart(cart.map((el)=>{
      return el.id === product.id ? {...exist , qty: exist.qty +1}: el
    }))

}
const decrement =(product)=>{
  const exist = cart.find((x)=>{
    return x.id === product.id;
})
setCart(cart.map((el)=>{
  return el.id === product.id ? {...exist , qty: exist.qty -1}: el
}))
}

//Remove cart product
const removeproduct = (product) => 
{
    const exsit = cart.find((x) => 
    {
        return x.id === product.id
    })
    if(exsit.qty > 0)
    {
        setCart(cart.filter((x) => 
        {
            return x.id !== product.id
        }))
    }
}
const Totalprice = cart.reduce((price, item) => price + item.qty * item.Price, 0)

//Favorites
const [favorites , setFavorites] = useState([])
/*const addToFavorite = (item) => {
  //setFavorites([...favorites, item]);
  const oldFavorite = [...favorites];
  const newFavorite = oldFavorite.concat(item)
  setFavorites(newFavorite) 
};*/
const addToFavorite = (product)=>{
  const exist = favorites.find((x)=>{
    return x.id === product.id
  }) 
  if(exist)
  {
    alert("This Product is already added to favorite")
  }else{
    setFavorites([...favorites, product]);
    alert('Product is added to favorite')
  }

}

/*const removeFromFavorite = (id) => {

 const oldFavorite =[...favorites];
 const newFavorite = oldFavorite.filter((el)=> el.id !== id);
 setFavorites(newFavorite);   
};*/
const removeproduct = (product) => 
{
    const exsit = cart.find((x) => 
    {
        return x.id === product.id
    })
    if(exsit.qty > 0)
    {
        setCart(cart.filter((x) => 
        {
            return x.id !== product.id
        }))
    }
}


    return(
        <Context.Provider value={{ product , filterProduct, AllProducts , searchBtn , detail , View , close , setClose , addToCart , cart 
          ,increment , decrement , removeproduct , Totalprice , addToFavorite , removeFromFavorite , favorites
         }}>
        {children}
        </Context.Provider>
    )}


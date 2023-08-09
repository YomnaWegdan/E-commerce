import { BrowserRouter , Routes , Route} from 'react-router-dom';
import './App.css';
import Navs from './Components/Navbar/Navs';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import Product from './Pages/Product';
import Cart from './Components/Cart/Cart';
import Contact from './Pages/Contact';
import Favorites from './Components/Favorites/Favorites';

function App() {
  return (
    <BrowserRouter>
    <Navs/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/favorite' element={<Favorites/>}/>

    <Route path='/contact' element={<Contact/>}/>


    </Routes>
    <Footer/>
    
    </BrowserRouter>
  );
}

export default App;

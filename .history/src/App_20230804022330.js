import { BrowserRouter , Routes , Route} from 'react-router-dom';
import './App.css';
import Navs from './Components/Navbar/Navs';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <Navs/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/product' element={<P/>}/>

    </Routes>
    <Footer/>
    
    </BrowserRouter>
  );
}

export default App;

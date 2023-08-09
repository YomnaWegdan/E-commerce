import { BrowserRouter , Routes , Route} from 'react-router-dom';
import './App.css';
import Navs from './Components/Navbar/Navs';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
    <Navs/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    </Routes>
    <Footer
    
    </BrowserRouter>
  );
}

export default App;

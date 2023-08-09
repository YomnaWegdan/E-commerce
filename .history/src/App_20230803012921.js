import { BrowserRouter , Routes , Route} from 'react-router-dom';
import './App.css';
import Navs from './Navbar/Navs';

function App() {
  return (
    <BrowserRouter>
    <Navs/>
    <Routes>
    <Route></Route>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;

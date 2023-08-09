import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navs from './Navbar/Navs';

function App() {
  return (
    <BrowserRouter>
    <Navs/>
    <Routes></Routes>
    
    </BrowserRouter>
  );
}

export default App;

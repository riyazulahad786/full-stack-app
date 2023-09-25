import logo from './logo.svg';
import './App.css';
import Home from './Components/Home.js';
import Calculator from './Components/Calculator';
import CashRegister from './Components/CashRegister';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import CountingCards from './Components/CountingCards';
import GolfScore from './Components/GolfScore';
import Navbar from './Components/Navbar.js';
import Db from './Components/Db';
function App() {
  return (
    <div className="">
   
    <Router>
    <Navbar/>
      <Routes>
      <Route exact path='/calculator' element={<Calculator/>}/>
        <Route exact path='/cashRegister' element={<CashRegister/>}/>
        <Route exact path='/countingcards' element={<CountingCards/>}/>
        <Route exact path='/golfscore' element={<GolfScore/>}/>
        <Route exact path='/dbtest' element={<Db/>}/>
        <Route exact path='/' element={<Home/>}/>


      </Routes>
    </Router>
    
    
    </div>
  );
}

export default App;

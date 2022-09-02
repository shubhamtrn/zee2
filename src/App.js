
import './App.css';
import Child from './components/Child';
import First from './components/First';
import LestSection from './components/LestSection';
import Navbar from './components/Navbar';
import Parent from './components/Parent';
import RightSec from './components/RightSec';
import Second from './components/Second';

function App() {
  return (
    <>
    <Navbar/>
    <div className="midsec">
    <LestSection/>
    <RightSec/>
    </div>
    </>
  );
}

export default App;

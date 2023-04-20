import logo from './logo.svg';
import './App.css';
import Luhn from './components/Luhn'

function App() {
  return (
    <div className="App">
     <h1>Check Your Card Number</h1>
     <Luhn/>
    </div>
  );
}

export default App;

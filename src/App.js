// import logo from './logo.svg';
import './App.css';
import Device from './Components/Device';
import Watch from './Components/Watch/Watch';

function App() {
  return (
    <div className="App" style={{ border: '3px solid blue', margin: '5px' }}>
      <Device name="blackB" price="10000"></Device>
      <Watch></Watch>
    </div>
  );
}

export default App;

import React from 'react';
import AppRoutes from './routes';
//import Navbar from './components/Navbar';
import './App.css';
//import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>

      <AppRoutes />

    </div>
  );
}

/*** 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;

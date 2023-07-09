import './App.scss';
import Home from './components/Home';
import CalcProvider from './context/CalcContext';

function App() {
  return (
    <CalcProvider>
      <div className="app-container">
        <Home />
      </div>
    </CalcProvider>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Toolbar from './Toolbar'
import TabelaEscalas from './TabelaEscalas';
import TabelaInstrumental from './TabelaInstrumental';
import CardMusica from './CardMusica';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Toolbar />
      <TabelaEscalas />
      <TabelaInstrumental />
      <CardMusica />
    </div>
  );
}

export default App;

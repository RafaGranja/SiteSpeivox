import './App.css';
import { Atuacao } from './Atuacao/Atuacao';
import { Header } from './Header/Header';
import { Sobre } from './Sobre/Sobre';
import { Valores } from './Valores/Valores';
import { Contato } from './Contato/Contato';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Sobre></Sobre>
      <Valores></Valores>
      <Atuacao></Atuacao>
      <Contato></Contato>
    </div>
  );
}

export default App;

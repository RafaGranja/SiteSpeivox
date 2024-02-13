import './App-Desktop.css';
import './App-Mobile.css';
import { Atuacao } from './Atuacao/Atuacao';
import { Header } from './Header/Header';
import { Sobre } from './Sobre/Sobre';
import { Valores } from './Valores/Valores';
import { Contato } from './Contato/Contato';
import { Rodape } from './Rodape/Rodape';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Sobre></Sobre>
      <Valores></Valores>
      <Atuacao></Atuacao>
      <Contato></Contato>
      <Rodape></Rodape>
    </div>
  );
}

export default App;

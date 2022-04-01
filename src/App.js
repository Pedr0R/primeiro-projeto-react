import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
const url = 'https://via.placeholder.com/200'

  return (
    <div className="App">
      <img src={url} alt='minha img '/>
      <SayMyName nome="Pedro"></SayMyName>
      <Pessoa nome="André" idade="32" profissão="Recruiter" foto="https://via.placeholder.com/200"/>
    </div>
  );
}

export default App;

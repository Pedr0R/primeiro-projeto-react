import './App.css';
// import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase'
import List from './components/List'

function App() {
const url = 'https://via.placeholder.com/200'

  return (
    <div className="App">
      <Frase />
      <List />
      <Frase />
      <h1>Testando CSS</h1>
      <img src={url} alt='minha img '/>
      <SayMyName nome="Pedro" />
      <Pessoa nome="André" idade="32" profissão="Recruiter" foto="https://via.placeholder.com/200"/>
    </div>
  );
}

export default App;

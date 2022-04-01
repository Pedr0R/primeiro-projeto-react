import './App.css';

function App() {
const name = 'Pedro';

const newname = 'newname'
const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h1>Olá {name}</h1>
      <p>Meu primeiro app</p>
      <img src={url} alt='minha img'/>
    </div>
  );
}

export default App;

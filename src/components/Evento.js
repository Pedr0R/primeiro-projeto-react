function Evento() {

  function meuEvento() {
    console.log('Evento disparado');
  }

  return(
    <div>
      <p>Clique para disparar um evento</p>
      <button onClick={() => alert('Evento disparado') + meuEvento()}>Clica</button>
    </div>
  )
}

export default Evento
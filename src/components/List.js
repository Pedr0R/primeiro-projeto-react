import Item from "./Item"

function List() {
  return(
  <>
    <h1>My list</h1>
    <ul>
      <Item lançamento={1948}/>
      <p>frase</p>
      <Item marca = "underarmor" lançamento={1996}/>
      <p>frase</p>
      <Item marca = "nike" lançamento={1971}/>
      <p>frase</p>
      <Item marca = "adidas" lançamento={1949}/>
      <p>frase</p>
    </ul>
  </>
  )
}

export default List
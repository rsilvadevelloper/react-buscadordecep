
import {FiSearch}from 'react-icons/fi'
import './index.css'


function App() {
  return (

    <div className="Container">
      <h1 ClassName> Buscador de CEP </h1>

      <div className ="ContainerInput">
        <input type= "text" 
        placeholder="Digite seu cep"
        
        />

        <button className= "buttonSearch">
          <FiSearch size= {25} Color = "#FFF"/> 

          Procurar

          </button>

<main className = "main">
  <h2> CEP: 2896000 </h2>
  <span> Rua Teste </span>
  <span> Complemento algum </span>
  <span> Matilde </span>
  <span> RJ - REGIAO DOS LAGOS </span>


</main>

      </div>

      <h1>teste projeto</h1>
      
    </div>
  );
}

export default App;

import { useState } from "react"

function App(){


  const [nome, setNome] = useState('Cr7')
  const [idade, setIdade] = useState('18')
  const [time, setTime] = useState('Corinthians FC')
  const [pi] = useState(3.14)

  //var idade = 18;
  //let time = 'Corinthians FC'
  //const pi = 3.14;

  const Formulario = (props)=> {
    const [valor, serValor] = useState()


    return (
      <div>
        <input 
          className = "nome"
          placeholder= {props.sombra}
          onChange={(e)=>{setValor(e.target.value)}}
          type="text" />

        <button 
          className="botao"
          onClick={()=>{
            if(valor.length > 0)
              alert(valor);
          
            else
            alert(props.nome + 'idade é' + props.idade 
            
          )}}      
        >
          CLIQUE AQUI
        </button>
      </div>
    )
  }


  return (
    <div>
      <h3>Pizzaria 2E</h3>

      <Formulario nome="Ricardo" 
       idade={45}
       sombra="Digite seu nome..." />
      <Formulario nome="Maria" sombra="Digite sua idade..." />
      <Formulario  nome="Tomas" sombra="Digite sua time..." />
      <Formulario  nome="Antonieta" sombra="Digite sua pi..." />

    </div>
  )
}

export default App

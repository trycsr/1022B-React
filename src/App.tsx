import './App.css'
import MeuComponente from './componentes/MeuComponente'
function App() {
  let nome = "Ryan"
  let sobrenome = "Christian"
  return (
    <>
    <MeuComponente/>
    <header>
      <div>

      </div>
      </header>
    <h1 className="nome">Nome: {nome}</h1>
    <p className="sobrenome">{sobrenome}</p>
    </>
  )
}

export default App

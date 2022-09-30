import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Desafio: Calculadora de Pitágoras</h1>
        <h2>Yasmin Coelho Ramos</h2>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        
      </header>
    </div>
  )
}

export default App

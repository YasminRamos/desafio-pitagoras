import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
 

  function Andar(){
    document.getElementById('alerta').innerHTML = ""
    const input = document.querySelector('#input');
    const valor = input.value;

    if(valor<=0 || valor>=20){
      document.getElementById('alerta').innerHTML = "Insira um valor de 1 a 20"
    }
    else{

      return valor
    }

  }
  

  return (
    <div className="App">
      <header>
        
        <nav>
          <h1>Desafio: Calculadora de Pitágoras</h1>
          <h2>Yasmin Coelho Ramos</h2>
          
        </nav>
      </header>
        <main>
          <h1>Resolvendo problemas da vida real com o teorema de Pitágoras</h1>
          <p>Você é um bombeiro e foi chamado para apagar um incêndio em um apartamento. Insira qual é o andar que está em chamas e escolha o tamanho da sua escada, o sistema te retornará em qual distância do prédio você deve estacionar.
          </p>
          <form>
            <label id='alerta'></label>
            <input type='number' placeholder='Andar' id='input' onBlur={()=>Andar()}></input>
            
            <select>
              <option>10 m</option>
              <option>15 m</option>
              <option>20 m</option>
            </select>

          </form>
        </main>
    </div>
  )
}

export default App

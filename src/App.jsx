import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import predio2 from './img/predio2.png'
import caminhao from './img/caminhao.png'
import escada from './img/escada.png'

function App() {
 

  function Andar(){
    document.getElementById('alerta').innerHTML = ""
    const input = document.querySelector('#input');
    const valor = input.value;

    if(valor<=0 || valor>20){
      document.getElementById('alerta').innerHTML = "Insira um valor de 1 a 20"
      input.value = 1
    }
    else{
      document.getElementById('alerta').innerHTML = ""      
    }

  }


  function Distancia(){
    const input = document.querySelector('#input');
    const andar = input.value;
    

    const escada = document.querySelector('#escada');
    const option = escada.value;
    
    const distancia = Math.sqrt(Math.pow(option,2)-(Math.pow(andar,2)));
    console.log(distancia);
    const desenho = document.querySelector('#resultado');
    console.log(desenho);
    desenho.style.width=`${distancia}rem`;

    return document.getElementById('resultado').innerHTML = `${distancia.toFixed(2)} m`
    

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
            <label id='alerta' className='alerta'></label>
            <input type='number' placeholder='Andar' id='input' onBlur={()=>Andar()} onChange={()=>Distancia()}></input>
            
            <select id='escada' onChange={()=>Distancia()}>
              <option value={10}>10 m</option>
              <option value={15}>15 m</option>
              <option value={20}>20 m</option>
            </select>

          </form>
          
          <div>
            <div  className='imagens'>
              <div  className='predio'><img src={predio2} alt="predio" /></div>
              <p id='resultado' className='resultado'></p>
              <div className='caminhaocomescada'>
                <div className='bombeiro'><img  src={escada} alt="escada" /></div>
                <div className='caminhao'><img  src={caminhao} alt="caminhao de bombeiros" /></div>
              </div>
            </div>
            
            
          </div>
        </main>
    </div>
  )
}

export default App

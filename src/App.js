import React, { useState } from 'react'
import './App.css'

const Conversor = () => {
  const [valor, setValor] = useState(0);
  const [result, setResult] = useState(0);
  const onChange = (event) => {
    setValor(event.target.value);
  };

  const preventSubmit = (e) => {
    e.preventDefault();
  }

  const convert = (value)=>{
    const novoValor = value.split("").reverse().join("")
    let result = 0;
    for (let i = novoValor.length; i >= 0; i--){
      if (novoValor[i] === '1'){
        result += Math.pow(2, i);
      }
      
    }

    setResult(result)
  }


  return (
    <form className="form" onSubmit={preventSubmit}>
      <input type="text" value={valor} onChange={onChange} placeholder="Digite o número binário" />
      <button onClick={() => convert(valor)}>Convert</button>
      <input type="text" value={result} placeholder="Resultado..." />
    </form>

  )

}
export default function App(){
  return (
    <div className="container">
      <h1>Converter Bin pra Dec</h1>
      <Conversor />
    </div>
  )
}


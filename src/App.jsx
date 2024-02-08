import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [estatura, setEstatura] = useState('');
  const [peso, setPeso] = useState('');
  const [condicion, setCondicion] = useState('');
  const [IMC, setImc] = useState('');
  const formRef = useRef(null);

  function handleEstatura(event) {
    setEstatura(event.target.value);
  }

  function handlePeso(event) {
    setPeso(event.target.value);
  }

  function handleEnviar(event) {
    event.preventDefault();
    
    const estaturaNumber = Number(estatura);
    const pesoNumber = Number(peso);
    const IMC = pesoNumber / Math.pow(estaturaNumber, 2);
    setImc(IMC.toFixed(2));
    let condition = "";
    switch (true) {
      case (IMC < 18.5):
        condition = "Bajo peso.";
        console.log(condition);
        break;
      case (IMC >= 18.5 && IMC < 24.9):
        condition = "Peso Saludable."
        console.log(condition);
        break;
      case (IMC >= 25 && IMC < 29.9):
        condition = "Sobrepeso."
        console.log(condition);
        break;
      case (IMC > 30):
        condition = "Obesidad."
        console.log(condition);
        break;
      default:
    }
    setCondicion(condition);
    formRef.current.reset();
  }

  return (
    <>
      <div className='form'>
        <form className='form' >
          <label htmlFor="estatura">Estatura: (m)</label>
          <input type="number" id='estatura'  onChange={handleEstatura} placeholder='1.57 m' />
          <label htmlFor="peso">Peso: (kg)</label>
          <input type="number" id='peso'  onChange={handlePeso} placeholder='76 kg' />
          <button  onClick={handleEnviar}>Calcular</button>
        </form>
      </div>
      <div className='condition'>
            <p>IMC: {IMC}</p>
            <p>Condición: {condicion}</p>
          </div>
    </>
  )
}

export default App

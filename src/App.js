import './App.css';
import {useState} from 'react'
import axios from 'axios'

const DiscTable = () => {

  const [options, setOptions] = useState([
    {values: ['Objetivo', 'Entusiasta', 'Diplomata','Perfeccionista'], checked: null},
    {values: ['Direto', 'Social', 'Paciente', 'Precioso'], checked: null},
    {values: ['Ousado', 'Persuasivo', 'Leal', 'Descobridor de fatos'], checked: null},
    {values: ['Dominador', 'Impulsivo', 'Previsível', 'Pesquisador'], checked: null},
    {values: ['Exigente', 'Emocional', 'Pessoa de equipe', 'Sistemático'], checked: null},
    {values: ['Enérgico', 'Oferecido', 'Calmo', 'Convencional'], checked: null},
    {values: ['Disposto a correr riscos', 'Comunicador', 'Ponderado', 'Cordial'], checked: null},
    {values: ['Aventureiro', 'Influente', 'Recatado', 'Cuidadoso'], checked: null},
    {values: ['Decisivo', 'Agradável', 'Observador', 'Contido'], checked: null},
    {values: ['Curioso', 'Sociável', 'Tranquilo', 'Altos padrões'], checked: null},
    {values: ['Autoconfiante', 'Generoso', 'Pacífico', 'Analítico'], checked: null},
    {values: ['Competitivo', 'Equilibrado', 'Prudente', 'Sensível'], checked: null},
    {values: ['Rápido', 'Encantador', 'Amigável', 'Maduro'], checked: null},
    {values: ['Seguro de si', 'Confiante', 'Estável', 'Evasivo'], checked: null},
    {values: ['Controlador', 'Convincente', 'Versátil', 'Centrado'], checked: null},
  ])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://127.0.0.1:8000/api/curriculum/disctest', JSON.stringify(options));
    console.log(res);
  }

   const handleChange = (e) => {
    const row = e.target.attributes.row.value;
    const idx = e.target.attributes.idx.value;
    const newRow = options[row];
    newRow.checked = idx;
    const newOptions = options.filter((o,index) => index === idx ? newRow : o);
    setOptions(newOptions);
  }

  return (
    <div className='table-container'>
    <p>Você se considera:</p>
    <form onSubmit={handleSubmit} onChange={handleChange}>
      <table>
          <tbody>
            <tr>
              <th>Grupo 1</th>
              <th>Grupo 2</th>
              <th>Grupo 3</th>
              <th>Grupo 4</th>
            </tr>
            {options.map((row,rowIdx) => (
                <tr>
                  {row.values.map((el, idx) => (
                    <td><label><input type="radio" name={`testL${rowIdx}`} value={el} row={rowIdx} idx={idx} required={true}/>{el}</label></td>
                    )
                )}
                </tr>
            ))}
          </tbody>
      </table>
      <div className='button-container'>
        <button type='submit'>ENVIAR</button>
      </div>
    </form>
    </div>
  )

}

function App() {
  return (
    <div className="App">
      <div className='header'>
        <h1>Teste comportamental</h1>
        <h2>
          Por favor, escolha entre as 4 colunas a  que mais representa você em cada linha.<br />
          Não há respostas certas ou erradas.										
        </h2>
      </div>
      <DiscTable />
    </div>
  );
}

export default App;

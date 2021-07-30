import './App.css';
import {useState} from 'react'
import axios from 'axios'

const DiscForm = () => {

  const [personFirstName, setPersonFirstName] = useState('Jamil')
  const [personLastName, setPersonLastName] = useState('aaaa')


  const [options, setOptions] = useState([
    {values: ['Objetivo', 'Entusiasta', 'Diplomata', 'Perfeccionista'], checked: null},
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
    console.log('k')
    const payload = {
      personFirstName: personFirstName,
      personLastName: personLastName,
      options: options,
    }
    console.log(JSON.stringify(payload))
    const res = await axios.post('http://127.0.0.1:8000/api/curriculum/disctest', JSON.stringify(payload));
  }

   const handleInputChange = (e) => {
    const row = e.target.attributes.row.value;
    const idx = e.target.attributes.idx.value;
    const newRow = options[row];
    newRow.checked = idx;
    const newOptions = options.filter((option, index) => index === idx ? newRow : option);
    setOptions(newOptions);
  }


  return (
    <div className='table-container'>
    <form onSubmit={handleSubmit}>
      <div className='name-input'>
        <label>
          <span>Nome: </span>
          <input
            onChange={(e) => setPersonFirstName(e.target.value)}
            type='text' name='personName'
            defaultValue={personFirstName}
            required={true}
          />
        </label>
        <label>
          <span>Sobrenome: </span>
          <input
            onChange={(e) => setPersonLastName(e.target.value)}
            type='text'
            name='personName'
            defaultValue={personLastName}
            required={true}
          />
        </label>
      </div>

      <p>Você se considera:</p>
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
                    <td>
                      <label>
                        <input 
                          onChange={handleInputChange} 
                          type="radio" 
                          name={`testL${rowIdx}`} 
                          value={el} 
                          row={rowIdx} 
                          idx={idx} 
                          required={true}
                        />{el}
                      </label>
                    </td>
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
      <DiscForm />
    </div>
  );
}

export default App;

import './App.css';
import axios from 'axios'

const DiscTable = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = document.forms[0];
    const formData = new FormData(form);
    //const res = await axios.post('http://127.0.0.1:8000/api/curriculum/disctest', formData)
    //console.log(res)
    Array.from(form.querySelectorAll('tr')).map((row, rowIndex) => (
      Array.from(row.querySelectorAll('input')).map(i => console.log(i.checked === true))
    ))
  }

   const handleChange = (e) => {
    const input = e.target;
    const td = input.parentElement.parentElement;
    const row = td.parentElement
    console.log([...row.children].indexOf(td))
  }

  const options = [
    {
      'Objetivo': false,
    }
  ]


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
            <tr>
                <td><label><input type="radio" name="testL1" value="Objetivo" required={true} />Objetivo</label></td>
                <td><label><input type="radio" name="testL1" value="Entusiasta" />Entusiasta</label></td>
                <td><label><input type="radio" name="testL1" value="Diplomata" />Diplomata</label></td>
                <td><label><input type="radio" name="testL1" value="Perfeccionista" />Perfeccionista</label></td>
            </tr>
            <tr>
                <td><label><input type="radio" name="testL2" value="Direto" required={true} />Direto</label></td>
                <td><label><input type="radio" name="testL2" value="Social" />Social</label></td>
                <td><label><input type="radio" name="testL2" value="Paciente" />Paciente</label></td>
                <td><label><input type="radio" name="testL2" value="Precioso" />Precioso</label></td>
            </tr>
            <tr>
                <td><label><input type="radio" name="testL3" value="Ousado" required={true} />Ousado</label></td>
                <td><label><input type="radio" name="testL3" value="Persuasivo" />Persuasivo</label></td>
                <td><label><input type="radio" name="testL3" value="Leal" />Leal</label></td>
                <td><label><input type="radio" name="testL3" value="Descobridor de fatos" />Descobridor de fatos</label></td>
            </tr>
            <tr>
                <td><label><input type="radio" name="testL4" value="Dominador" required={true} />Dominador</label></td>
                <td><label><input type="radio" name="testL4" value="Impulsivo" />Impulsivo</label></td>
                <td><label><input type="radio" name="testL4" value="Previsível" />Previsível</label></td>
                <td><label><input type="radio" name="testL4" value="Pesquisador" />Pesquisador</label></td>
            </tr>
            <tr>
                <td><label><input type="radio" name="testL5" value="Exigente" required={true} />Exigente</label></td>
                <td><label><input type="radio" name="testL5" value="Emocional" />Emocional</label></td>
                <td><label><input type="radio" name="testL5" value="Pessoa de equipe" />Pessoa de equipe</label></td>
                <td><label><input type="radio" name="testL5" value="Sistemático" />Sistemático</label></td>
            </tr>
            <tr>
                <td><label><input type="radio" name="testL6" value="Enérgico" required={true} />Enérgico</label></td>
                <td><label><input type="radio" name="testL6" value="Oferecido" />Oferecido</label></td>
                <td><label><input type="radio" name="testL6" value="Calmo" />Calmo</label></td>
                <td><label><input type="radio" name="testL6" value="Convencional" />Convencional</label></td>
            </tr>
            <tr>
                <td><label><input type="radio" name="testL7" value="Disposto a correr riscos" required={true} />Disposto a correr riscos</label></td>
                <td><label><input type="radio" name="testL7" value="Comunicador" />Comunicador</label></td>
                <td><label><input type="radio" name="testL7" value="Ponderado" />Ponderado</label></td>
                <td><label><input type="radio" name="testL7" value="Cordial" />Cordial</label></td>
            </tr>
            <tr>
                <td><label><input type="radio" name="testL8" value="Aventureiro" required={true} />Aventureiro</label></td>
                <td><label><input type="radio" name="testL8" value="Influente" />Influente</label></td>
                <td><label><input type="radio" name="testL8" value="Recatado" />Recatado</label></td>
                <td><label><input type="radio" name="testL8" value="Cuidadoso" />Cuidadoso</label></td>
            </tr>
            <tr>
                <td><label><input type="radio" name="testL9" value="Decisivo" required={true} />Decisivo</label></td>
                <td><label><input type="radio" name="testL9" value="Agradável" />Agradável</label></td>
                <td><label><input type="radio" name="testL9" value="Observador" />Observador</label></td>
                <td><label><input type="radio" name="testL9" value="Contido" />Contido</label></td>
            </tr>
            <tr>
                <td><label><input type="radio" name="testL10" value="Curioso" required={true} />Curioso</label></td>
                <td><label><input type="radio" name="testL10" value="Sociável" />Sociável</label></td>
                <td><label><input type="radio" name="testL10" value="Tranquilo" />Tranquilo</label></td>
                <td><label><input type="radio" name="testL10" value=" />Altos padrões" />Altos padrões</label></td>
            </tr>
            <tr>
                <td><label><input type="radio" name="testL11" value="Autoconfiante" required={true} />Autoconfiante</label></td>
                <td><label><input type="radio" name="testL11" value="Generoso" />Generoso</label></td>
                <td><label><input type="radio" name="testL11" value="Pacífico" />Pacífico</label></td>
                <td><label><input type="radio" name="testL11" value=" />Analítico" />Analítico</label></td>
            </tr>
            <tr>
                <td><label><input type="radio" name="testL12" value="Competitivo" required={true} />Competitivo</label></td>
                <td><label><input type="radio" name="testL12" value="Equilibrado" />Equilibrado</label></td>
                <td><label><input type="radio" name="testL12" value="Prudente" />Prudente</label></td>
                <td><label><input type="radio" name="testL12" value=" />Sensível" />Sensível</label></td>
            </tr>
            <tr>
                <td><label><input type="radio" name="testL13" value="Rápido" required={true} />Rápido</label></td>
                <td><label><input type="radio" name="testL13" value="Encantador" />Encantador</label></td>
                <td><label><input type="radio" name="testL13" value="Amigável" />Amigável</label></td>
                <td><label><input type="radio" name="testL13" value=" />Maduro" />Maduro</label></td>
            </tr>
            <tr>
                <td><label><input type="radio" name="testL14" value="Seguro de si" required={true} />Seguro de si</label></td>
                <td><label><input type="radio" name="testL14" value="Confiante" />Confiante</label></td>
                <td><label><input type="radio" name="testL14" value="Estável" />Estável</label></td>
                <td><label><input type="radio" name="testL14" value=" />Evasivo" />Evasivo</label></td>
            </tr>
            <tr>
                <td><label><input type="radio" name="testL15" value="Controlador" required={true} />Controlador</label></td>
                <td><label><input type="radio" name="testL15" value="Convincente" />Convincente</label></td>
                <td><label><input type="radio" name="testL15" value="Versátil" />Versátil</label></td>
                <td><label><input type="radio" name="testL15" value=" />Centrado" />Centrado</label></td>
            </tr>
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

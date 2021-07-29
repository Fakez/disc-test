import './App.css';

const DiscTable = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit')
  }

  return (
    <div className='table-container'>
    <p>Você se considera:</p>
    <form onSubmit={handleSubmit}>
      <table>
          <thead>
            <th>Grupo 1</th>
            <th>Grupo 2</th>
            <th>Grupo 3</th>
            <th>Grupo 4</th>
          </thead>
          <tbody>
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
                <td><label><input type="radio" name="testL3" value="Descobridor(a) de fatos" />Descobridor(a) de fatos</label></td>
            </tr>
            <tr>
                <td><label><input type="radio" name="testL4" value="Dominador(a)" required={true} />Dominador(a)</label></td>
                <td><label><input type="radio" name="testL4" value="Impulsivo(a)" />Impulsivo(a)</label></td>
                <td><label><input type="radio" name="testL4" value="Previsível" />Previsível</label></td>
                <td><label><input type="radio" name="testL4" value="Pesquisador(a)" />Pesquisador(a)</label></td>
            </tr>
            <tr>
                <td><label><input type="radio" name="testL5" value="Exigente" required={true} />Exigente</label></td>
                <td><label><input type="radio" name="testL5" value="Emocional" />Emocional</label></td>
                <td><label><input type="radio" name="testL5" value="Pessoa de equipe" />Pessoa de equipe</label></td>
                <td><label><input type="radio" name="testL5" value="Sistemático(a)" />Sistemático(a)</label></td>
            </tr>
            <tr>
                <td><label><input type="radio" name="testL6" value="Enérgico(a)" required={true} />Enérgico(a)</label></td>
                <td><label><input type="radio" name="testL6" value="Oferecido(a)" />Oferecido(a)</label></td>
                <td><label><input type="radio" name="testL6" value="Calmo(a)" />Calmo(a)</label></td>
                <td><label><input type="radio" name="testL6" value="Convencional" />Convencional</label></td>
            </tr>
            <tr>
                <td><label><input type="radio" name="testL7" value="Disposto(a) a correr riscos" required={true} />Disposto(a) a correr riscos</label></td>
                <td><label><input type="radio" name="testL7" value="Comunicador(a)" />Comunicador(a)</label></td>
                <td><label><input type="radio" name="testL7" value="Ponderado(a)" />Ponderado(a)</label></td>
                <td><label><input type="radio" name="testL7" value="Cordial" />Cordial</label></td>
            </tr>
            <tr>
                <td><label><input type="radio" name="testL8" value="Aventureiro(a)" required={true} />Aventureiro(a)</label></td>
                <td><label><input type="radio" name="testL8" value="Influente" />Influente</label></td>
                <td><label><input type="radio" name="testL8" value="Recatado(a)" />Recatado(a)</label></td>
                <td><label><input type="radio" name="testL8" value="Cuidadoso(a)" />Cuidadoso(a)</label></td>
            </tr>
            <tr>
                <td><label><input type="radio" name="testL9" value="Decisivo(a)" required={true} />Decisivo(a)</label></td>
                <td><label><input type="radio" name="testL9" value="Agradável" />Agradável</label></td>
                <td><label><input type="radio" name="testL9" value="Observador(a)" />Observador(a)</label></td>
                <td><label><input type="radio" name="testL9" value="Contido(a)" />Contido(a)</label></td>
            </tr>
            <tr>
                <td><label><input type="radio" name="testL10" value="Curioso(a)" required={true} />Curioso(a)</label></td>
                <td><label><input type="radio" name="testL10" value="Sociável" />Sociável</label></td>
                <td><label><input type="radio" name="testL10" value="Tranquilo(a)" />Tranquilo(a)</label></td>
                <td><label><input type="radio" name="testL10" value=" />Altos padrões" />Altos padrões</label></td>
            </tr>
            <tr>
                <td><label><input type="radio" name="testL11" value="Autoconfiante" required={true} />Autoconfiante</label></td>
                <td><label><input type="radio" name="testL11" value="Generoso(a)" />Generoso(a)</label></td>
                <td><label><input type="radio" name="testL11" value="Pacífico(a)" />Pacífico(a)</label></td>
                <td><label><input type="radio" name="testL11" value=" />Analítico(a)" />Analítico(a)</label></td>
            </tr>
            <tr>
                <td><label><input type="radio" name="testL12" value="Competitivo(a)" required={true} />Competitivo(a)</label></td>
                <td><label><input type="radio" name="testL12" value="Equilibrado(a)" />Equilibrado(a)</label></td>
                <td><label><input type="radio" name="testL12" value="Prudente" />Prudente</label></td>
                <td><label><input type="radio" name="testL12" value=" />Sensível" />Sensível</label></td>
            </tr>
            <tr>
                <td><label><input type="radio" name="testL13" value="Rápido(a)" required={true} />Rápido(a)</label></td>
                <td><label><input type="radio" name="testL13" value="Encantador(a)" />Encantador(a)</label></td>
                <td><label><input type="radio" name="testL13" value="Amigável" />Amigável</label></td>
                <td><label><input type="radio" name="testL13" value=" />Maduro(a)" />Maduro(a)</label></td>
            </tr>
            <tr>
                <td><label><input type="radio" name="testL14" value="Seguro de si" required={true} />Seguro de si</label></td>
                <td><label><input type="radio" name="testL14" value="Confiante" />Confiante</label></td>
                <td><label><input type="radio" name="testL14" value="Estável" />Estável</label></td>
                <td><label><input type="radio" name="testL14" value=" />Evasivo(a)" />Evasivo(a)</label></td>
            </tr>
            <tr>
                <td><label><input type="radio" name="testL15" value="Controlador(a)" required={true} />Controlador(a)</label></td>
                <td><label><input type="radio" name="testL15" value="Convincente" />Convincente</label></td>
                <td><label><input type="radio" name="testL15" value="Versátil" />Versátil</label></td>
                <td><label><input type="radio" name="testL15" value=" />Centrado(a)" />Centrado(a)</label></td>
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

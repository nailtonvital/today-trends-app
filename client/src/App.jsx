import { useState } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [word, setWord] = useState("")
  const [resultados, setResultado] = useState()
  console.log(resultados)

  const  getKeyword = (text)=>{
    setWord(text.target.value.replace(/ /g, "-"))
  }

  const send = async () =>{
    await axios.get(`http://localhost:3333/relatedTopics?word=${word}`)
      .then((response) => {
        setResultado(response)
        
      });
  }

 

  return (
    <div className="App">
      <div className="container">
        <div className="main-header">
          <h1 className="title">Keyword Generator</h1>
          <div className="g-col-md-9 input">
            <input type="text" className="input-text" onChange={getKeyword}/>
            <span className="input-group-text search-button" onClick={send}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </span>
          </div>
        </div>
        <div className="results">
          <div className="results-head">
            <h5>Results</h5>
            <div className="results-buttons">
              <button type="button" className="btn btn-dark">Open on Editor</button>
              <button type="button" className="btn btn-dark">Export <i className='bx bx-export'></i></button>
              <button type="button" className="btn btn-dark">Copy All <i className='bx bx-copy'></i></button>
            </div>
          </div>

          <ul className="list-group">
            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App

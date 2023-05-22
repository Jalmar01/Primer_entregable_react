import { useState } from 'react'
import './App.css'
import ButtonPhrase from './components/ButtonPhrase'
import PhrasesCart from './components/PhrasesCart'
import phrases from './utils/phrases.json'
import randomElementFromArray from './utils/randomElementFromArray'
import AuthorCart from './components/AuthorCart'

const arrBackground = [1, 2, 3, 4]

function App() {

  const initialPhrase = randomElementFromArray(phrases)
  const initialPath = randomElementFromArray(arrBackground)

  const [phraseRandom, setPhraseRandom] = useState(initialPhrase)
   
  
  const [pathRandom, setPathRandom] = useState(initialPath) 

  const objStyle = {
    backgroundImage :`url('/img/fondo${pathRandom}.jpg')`
  }

  return (
    <div style={objStyle} className='app'>
        <h2 className='app__title'>Galleta de la fortuna</h2>
        <PhrasesCart phraseRandom={phraseRandom}/> 
        <ButtonPhrase 
          setPhraseRandom={setPhraseRandom}
          setPathRandom={setPathRandom}
          arrBackground={arrBackground} 
        />
        { <AuthorCart phraseRandom={phraseRandom}/>}

        <p className='git'> <span>Mi repositorio:</span> https://github.com/Jalmar01/Primer_entregable_react</p>
    </div>
  )
}

export default App

import getRandomElementFromArray from "../utils/randomElementFromArray"
import phrase from '../utils/phrases.json'


const ButtonPhrase = ({ setPhraseRandom, setPathRandom, arrBackground }) => {

  const handleRandomPhrase = () => {
    const newRandomPhrase = getRandomElementFromArray(phrase)
    setPhraseRandom(newRandomPhrase)

    const newPathRandom = getRandomElementFromArray(arrBackground)
    setPathRandom(newPathRandom)
  }


  return ( 
    <button className="app__btn" onClick={handleRandomPhrase}> 
        Ver otro 
    </button>
  )
}

export default ButtonPhrase
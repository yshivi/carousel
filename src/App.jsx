import { useState } from 'react'
import Carousel from './Carousel'
import './index.css'
// import './App.css'



const App = () => {
  const [step, setStep] = useState(0)
  const [autoPlay, setAutoPlay] = useState(false)
  setTimeout(() => {
    if (autoPlay === true) {
      setStep(step +1)
      if (step === 2)
        setStep(0)
    }

  }, 1000)

  const chengeCheckBox = () => {
    if (autoPlay === true) {
      setAutoPlay(false)
    }
    else {
      setAutoPlay(true)
    }
  }

  const previousButton = () => {
    setStep(step + 1)
    if (step === 2)
      setStep(0)
  }

  const nextButton = () => {
    setStep(step - 1)
    if (step === 2)
      setStep(0)
  }
  return (
    <>
      <h1>Carousel Image</h1>
      <div className='main'>

        <button onClick={previousButton}>&#60;</button>
        <Carousel steps={step} />

        <button onClick={nextButton}>&#62;</button>
        <input type="checkBox" onChange={chengeCheckBox} value={autoPlay} />
      </div>
    </>
  )
}

export default App

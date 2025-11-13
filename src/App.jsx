import { useState } from 'react'
import Start from './components/Start';
import Questions from './components/Questions';
import EndScreen from './components/EndScreen';
import './App.css'
import './index.css'

export default function App() {
  const [stage, setStage] = useState('start')
  const [results, setResults] = useState(null)
  const handleGameEnd = (results) => {
    console.log('Game ended with results:', results);
    setResults(results);
    setStage('results');
  }
  return (
    <>
      Video Game Trivia
    </>
  )
}



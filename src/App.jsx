import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'
import questionsAndAnswers from './data/q-and-a.js'


function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const flashcards = <Card key={currentIndex} question={questionsAndAnswers[currentIndex].question} answer={questionsAndAnswers[currentIndex].answer} isFlipped={isFlipped} setIsFlipped={setIsFlipped} />

  return (
    <div>
      <div className="header">
        <h1>🌊 Percy Jackson Flashcards 🌊</h1>
        <h2>Wanna test your PJO knowledge? Try out the flashcards and see if you can get them all right ✨</h2>
      </div>
      <div className="count-display">
        <h3>Total # Cards: 3 | Number of Cards Played: {currentIndex}</h3>
      </div>
      <div className='card-ui'>
        <div className="questions">
          {flashcards}
        </div>
      </div>
      <div className="nav-btns">
          <button onClick={() => {
            setCurrentIndex((currentIndex - 1 + questionsAndAnswers.length) % questionsAndAnswers.length);
            setIsFlipped(false);
            }}>Prev</button>
          <button onClick={() => {
            setCurrentIndex((currentIndex + 1) % questionsAndAnswers.length)
            setIsFlipped(false);
            }}>Next</button>
      </div>
      <footer>
        <p>Deep Sea Blue: #0b3d91</p>
        <p>Seafoam Green:rgb(61, 218, 187)</p>
        <p>Sandy Beige: #f4e9cd</p>
        <p>White Smoke: #f5f5f5</p>
        <p>Storm Gray: #4b4e6d</p>
        <p>Golden Amber: #ffc300</p>
        <p>Bronze: #cd7f32</p>
        <p>Electric Blue: #00b4d8</p>
      </footer>
    </div>
  );
};

export default App;

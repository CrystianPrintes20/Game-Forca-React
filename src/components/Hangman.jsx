import React, { useState } from 'react'
import { randomWord } from "./Words";
import "../styles/Hangman.css"

function Hangman(props) {

    /* const [nWrong, setnWrong] = useState(0)
      const [guessed, setGuessed] = useState( new Set() )
      const [answer, setAnswer] = useState("apples") */
    const valores = randomWord()

    const [state, setState] = useState({
        nWrong: 0,
        score: 120,
        guessed: new Set(),
        answer:valores[0],
        tema: valores[1],
    })

    function reset() {
       setState({
            ...state,
            guessed:  new Set(),
            score: 120,
            nWrong: 0,
            answer:valores[0],
            tema: valores[1],
        })
       
    }
 /*    function noRepetAnswer(){
        let newAnswer
        do {
            newAnswer = randomWord()
        } while (newAnswer === setState.answer)
        
        setState.answer(newAnswer)
    } */
    
    function guessedWord() {
        return state.answer.split("").map(ltr => (state.guessed.has(ltr) ? ltr : "_"))
    }

    function handleGuess(evt) {
        const ltr = evt.target.value

        const newGuessed = new Set(state.guessed)
        newGuessed.add(ltr)

        const newNwrong = state.nWrong + (state.answer.includes(ltr) ? 0 : 1)

        const newScore = state.nWrong !== newNwrong ? state.score - 20 : state.score - 0
        setState({
            ...state,
            guessed: newGuessed,
            score: newScore,
            nWrong: newNwrong
        })
        /*  setnWrong(nWrong + (answer.includes(ltr) ? 0 : 1))
 
         console.log("gueseed", guessed)
         console.log("nWrong", nWrong)
         console.log("answer", answer) */
    }

    function generateButtons() {
        return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
            <button
                key={ltr}
                value={ltr}
                onClick={handleGuess}
                disabled={state.guessed.has(ltr)}
            >
                {ltr}
            </button>
        ))
    }

    const gameOver = state.nWrong >= props.maxWrong
    const isWinner = guessedWord().join("")  === state.answer
    let gameState = generateButtons()
    if (isWinner) gameState = "Você Ganhou!"
    if(gameOver) gameState = "Você Perdeu! :("

    return (
        <div className='Hangman'>
            <h2>Tente a Sorte!</h2>

            <img src={props.images[state.nWrong]} />

            <p>Tema: {state.tema}</p>
            
            <p>Guessed Wrong: {state.nWrong}</p>

            <p> Score: {state.score}</p>
            
            <p className='Hangman-word'>
                {!gameOver ? guessedWord() : state.answer}
            </p>

            <p className='Hangman-btns'>{gameState}</p>

            <button id='reset' onClick={reset}>
                Restart Game?
            </button>
        </div>
    )
}

Hangman.defaultProps = {
    maxWrong: 6,
    images: [
        "../imgs/0.png",
        "../imgs/1.png",
        "../imgs/2.png",
        "../imgs/3.png",
        "../imgs/4.png",
        "../imgs/5.png",
        "../imgs/6.png",
    ]
}

export default Hangman
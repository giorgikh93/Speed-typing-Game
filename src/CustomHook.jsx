import { useState, useEffect, useRef } from 'react'

function CustomHook(startingTime = 5) {
  
    const textarea = useRef(null)
    //=========state====//
    const [text, setText] = useState('')
    const [timeRemaining, setTimeRemaining] = useState(startingTime)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    //=========state====//


    function handleChange(e) {
        const { value } = e.target
        setText(value)
    }

    function startGame() {
        setIsTimeRunning(true)
        textarea.current.disabled = false
        textarea.current.focus()
        setTimeRemaining(startingTime)
        setText('')
        setWordCount(0)
    }

    function endGame() {
        setIsTimeRunning(false)
        setWordCount(calculateWordcount(text))
    }

    function calculateWordcount(text) {
        const wordsArr = text.trim().split(' ')
        const filteredWords = wordsArr.filter(word => word !== '')
        return filteredWords.length
    }

    useEffect(() => {
        if (isTimeRunning && timeRemaining > 0) {
            setTimeout(func, 1000)
        } else if (timeRemaining === 0) {
            endGame()
        }
        function func() {
            setTimeRemaining(prevTime => prevTime - 1)
        }
    }, [timeRemaining, isTimeRunning])

    return {textarea,isTimeRunning,handleChange,text,timeRemaining,startGame,wordCount}

}
export default CustomHook
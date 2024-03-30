import { useState } from "react";
import wordsArray from "./components/wordsArray"; // Import the array of words
import "./App.css";

export default function App() {
    // State variables to track correct words and input value
    const [correctWords, setCorrectWords] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const [gameOver, setGameOver] = useState(false);


    // Function to get a random word from the wordsArray
    const getRandomWord = () => {
        return wordsArray[Math.floor(Math.random() * wordsArray.length)];
    };
    const [word, setWord] = useState(getRandomWord());
    const wordToremove = word

    const removeWord = () => {
        const removedWordIndex = wordsArray.indexOf(wordToremove)
        wordsArray.splice(removedWordIndex, 1)
        if (wordsArray.length === 0) {
            setGameOver(true)
        }

    }



    // Function to change the displayed word
    function changeWord() {
        removeWord()
        setWord(getRandomWord()); // Update the state with the new word
    }

    // Function to handle form submission
    function handleSubmit(e) {
        removeWord()
        e.preventDefault(); // Prevent the default form submission behavior
        // Check if the typed word matches the displayed word
        if (inputValue.toLowerCase() === word) {
            setCorrectWords(correctWords + 1); // Increment correct count if matched
            changeWord(); // Change to a new random word
            setInputValue(""); // Clear the input value
        } else {
            setCorrectWords(correctWords - 1); // Decrease correct count if wrong
            setInputValue(""); // Clear the input value
        }

    }

    // Function to handle input value change
    function handleInputChange(e) {
        setInputValue(e.target.value); // Update input value state
    }

    // Render the component
    return (
        <div>
            <div className="gameDiv">
                <h1 className="speedTitle">SPEED TYPER</h1>
                {gameOver ? (
                    <>
                        <h1>Game Over</h1>
                        <h2>You scored {correctWords == 1 ? "1 point" : correctWords + " points"}</h2>
                    </>
                ) : (
                    <>
                        <h1 key={word} className="randomWord">{word}</h1>

                        <h2 className="correctCount">Correct Words: {correctWords}</h2>
                        <button className="changeButton" onClick={changeWord}>Change</button>
                        <form className="formDiv" onSubmit={handleSubmit}>
                            <div className="formDiv">
                                <input
                                    className="wordInput"
                                    type="text"
                                    value={inputValue}
                                    onChange={handleInputChange} />
                                <button className="submitButton" type="submit">Submit</button>
                            </div>
                        </form>
                    </>
                )

                }
            </div>
        </div>
    );
}

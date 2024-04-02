import { useState } from "react";
import wordsArray from "./components/wordsArray";
import "./App.css";

export default function App() {

    const [correctWords, setCorrectWords] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const [gameOver, setGameOver] = useState(false);

    const getRandomWord = () => {
        return wordsArray[Math.floor(Math.random() * wordsArray.length)];
    };

    const [word, setWord] = useState(getRandomWord());

    const removeWord = () => {
        console.log("Word we removed is", word.toUpperCase());
        const removedWordIndex = wordsArray.indexOf(word);
        wordsArray.splice(removedWordIndex, 1);
        if (wordsArray.length === 0) {
            setGameOver(true);
        }
        console.log(
            `The wordsArray length is now ${wordsArray.length === 1 ? "1 word long." : `${wordsArray.length} words long.`
            }`
        );
    };

    function changeWord() {
        removeWord();
        setWord(getRandomWord());
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (inputValue.toLowerCase() === word) {
            setCorrectWords(correctWords + 1);
            changeWord();
            setInputValue("");
        } else {
            setCorrectWords(correctWords - 1);
            setInputValue("");
        }
    }

    function handleInputChange(e) {
        setInputValue(e.target.value);
    }

    function refreshPage() {
        window.location.reload(false);
    }


    return (
        <div>
            <div className="gameDiv">
                <h1 className="speedTitle">SPEEDTYPER</h1>
                {gameOver ? (
                    <>
                        <h1 className="gameOver">Game Over</h1>
                        <h2 className="scoredPoints">
                            You scored {correctWords === 1 ? "1 point!" : <span className="points">{correctWords}</span>} points!
                        </h2>
                        <button onClick={refreshPage} className="changeButton">New Game</button>
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
                                    placeholder={word}
                                    onChange={handleInputChange}
                                    autoFocus
                                />
                                <button className="submitButton" type="submit" onSubmit={handleSubmit}>Submit</button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}

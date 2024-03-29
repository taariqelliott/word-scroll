import { useState } from "react";
import wordsArray from "./components/wordsArray";
import "./App.css"

export default function App() {
    const [word, setWord] = useState(0);
    const [correctWords, setCorrectWords] = useState(0)
    const [inputValue, setInputValue] = useState(""); // State to track input value
    const array = wordsArray;

    function changeWord() {
        setWord(word + 1);
        if (word >= array.length - 1) {
            setWord(0);
        }
    }
    //  TODO: 
    //  ADD A WORD RANDOMIZER 
    //  ALSO REMOVE THE WORD FROM ARRAY AFTER THE TRY TO TYPE IT SO GAME ACTUALLY ENDS
    //  UI LIBRARY
    function handleSubmit(e) {
        e.preventDefault();
        console.log(inputValue); // Output the input value
        // Here you can perform any further processing with the input value
        // For example, you can update the state with it or perform some action.
        if (inputValue.toLowerCase() === array[word]) {
            setCorrectWords(correctWords + 1)
            setWord((prevWord) => (prevWord + 1) % array.length); // Move to the next word
            setInputValue("")
        }
        // THIS WILL ACTUALLY ALSO INCREMENT THE array[word] so they cant repeat it

        else if (inputValue.toLowerCase() !== array[word]) {
            setCorrectWords(correctWords - 1)
            setInputValue("")
        }
        if (word >= array.length - 1) {
            setWord(0);
        }
    }

    function handleInputChange(e) {
        setInputValue(e.target.value); // Update input value state
    }

    return (
        <div>
            <h1>SPEED TYPER</h1>
            <div>
                <h1>{array[word]}</h1>
                <h2>Correct Words:{correctWords}</h2>
                <button onClick={changeWord}>Change</button>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

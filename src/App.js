import React, { useState } from "react";
import "./styles.css";

/**
 * concept notes: styling in react
 */

/**
 * concept of hashmap (object as hashmap)
 * O(1) and why we are doing this.
 */
const emojiDictionary = {
  "🍘": "Rice cracker",
  "🥟": "Dumpling",
  "🍤": "Fried Shrimp",
  "🍜": "steaming bowl",
  "🍠": "Roasted Sweet potato",
  "🥗": "Green salad",
  "🍝": "spagetti",
  "🍣": "sushi",
  "🍪": "cookie",
  "🥧": "pie",
  "🍯": "Honey pot",
  "🍩": "Doughnut",
  "🍦": "Soft ice cream",
  "🍥": "Fish cake with swirl"
};
const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState(""); /** concept 2 is useState */
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    /** concept 3 is onchange */
    <div className="App">
      <h1>Find out the dish!</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"put an food emoji here to know the name of the food item"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <h2> {emoji} </h2> {/** Concept 1: JSX */}
      <h3> {meaning} </h3> {/** how much part is re-rendered. */}
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}

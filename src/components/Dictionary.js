import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "../dictionary.css";
import axios from "axios";

const Dictionary = () => {
  const [partOfSpeech, setPartOfSpeech] = useState(null);
  const [meaning, setMeaning] = useState(null);
  const [example, setExample] = useState(null);
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      axios
        .get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${event.target.value}`
        )
        .then((result) => {
          if (result.data) {
            console.log(result.data);
            result.data[0].meanings.splice(0, 1);
            setPartOfSpeech(result.data[0].meanings[0].partOfSpeech);
            setMeaning(result.data[0].meanings[0].definitions[0].definition);
            setExample(result.data[0].meanings[0].definitions[0].example);
          }
        });
    }
  };
  return (
    <div>
      <Sidebar />
      <section className="home-section dictionary-section">
        <div className="input">
          <label class="custom-field one">
            <input type="text" placeholder=" " onKeyPress={handleKeyPress} />
            <span class="placeholder">Enter Text</span>
          </label>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="info">
          <h3>{partOfSpeech}</h3>
          <br />

          <h3>{meaning}</h3>
          <br />

          {/* <p>{example}</p> */}
        </div>
      </section>
    </div>
  );
};

export default Dictionary;

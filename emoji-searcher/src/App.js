import React, { useState } from "react";
import emojiList from "./emojiList.json";

const MAX_RESULTS = 40;

const filterEmoji = (searchText = "") => {
  return emojiList
    .filter((emoji) => {
      return (
        emoji.title.toLowerCase().includes(searchText.toLowerCase()) ||
        emoji.keywords.includes(searchText)
      );
    })
    .slice(0, MAX_RESULTS);
};

const App = () => {
  const [filteredEmoji, setFilteredEmoji] = useState(filterEmoji());

  const handleSearchChange = (event) => {
    setFilteredEmoji(filterEmoji(event.target.value));
  };

  return (
    <div>
      <header className="header">Emoji Searcher</header>
      <div className="search-input">
        <input onChange={handleSearchChange} />
      </div>
      <div className="results">
        {filteredEmoji.map((emojiData) => {
          const codePointHex = emojiData.symbol.codePointAt(0).toString(16);
          const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
          return (
            <div className="result-row copy-to-clipboard">
              <img alt={emojiData.title} src={src} />
              <span className="title">{emojiData.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;

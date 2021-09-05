import React, { useState } from "react";
import "./styles.css";

const data = {
  "Slice of Life": [
    {
      name: "Your Lie in April",
      score: "10",
      eps: "22"
    },
    {
      name: "3 Gatsu no Lion",
      score: "10",
      eps: "44+"
    },
    {
      name: "Anohana",
      score: "8",
      eps: "11"
    },
    {
      name: "The Garden of Words",
      score: "8",
      eps: "1"
    },
    {
      name: "Welcome to the NHK!",
      score: "9",
      eps: "24"
    }
  ],
  Action: [
    {
      name: "Attack on Titan",
      score: "9.5",
      eps: "75+"
    },
    {
      name: "Demon Slayer",
      score: "9",
      eps: "26+"
    },
    {
      name: "Code Geass",
      score: "10",
      eps: "50"
    },
    {
      name: "Jujutsu Kaisen",
      score: "9",
      eps: "24+"
    },
    {
      name: "Fate/Zero",
      score: "10",
      eps: "25"
    }
  ],
  Fantasy: [
    {
      name: "Fullmetal Alchemist: Brotherhood",
      score: "10",
      eps: "64"
    },
    {
      name: "Re: Zero",
      score: "10",
      eps: "50+"
    },
    {
      name: "That Time I got Reincarnated as Slime",
      score: "8",
      eps: "48+"
    },
    {
      name: "Bersek",
      score: "8",
      eps: "25"
    }
  ]
};

export default function App() {
  var [genreSelected, setGenreSelected] = useState("Slice of Life");
  function clickHandler(event) {
    setGenreSelected(event.target.innerText);
  }
  return (
    <div className="App">
      <h1>MyAnimeList</h1>
      <p>Select a genre to see recommendations</p>
      <div className="Genres">
        {Object.keys(data).map((genre) => {
          return (
            <button key={genre} onClick={clickHandler}>
              {genre}
            </button>
          );
        })}
      </div>
      <hr></hr>
      <div className="Animes">
        {data[genreSelected].map((anime) => {
          return (
            <li
              style={{
                listStyle: "none",
                textAlign: "left",
                border: "1px solid",
                padding: "1em",
                margin: "1em",
                borderRadius: "5px"
              }}
            >
              {anime.name}
              <div style={{ marginTop: "10px" }}>
                <div>Score : {anime.score} / 10</div>
                <div>Number of Episodes : {anime.eps}</div>
              </div>
            </li>
          );
        })}
      </div>
      <p>+ indicates more episodes will be released in future</p>
    </div>
  );
}

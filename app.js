import React, { useState } from "react";
import "./style.css";

/*var username=prompt("name please")
var color="blue";*/

var task = prompt("Welcome user ! Name please ?");
var rep = "Ok Thank You ! Mr " + task;
alert(rep);

const emojilibrary = {
  "🪲": "Bug",
  "🦗": "Grasshopper",
  "🪰": "Fly",
  "🐝": "Bee",
  "🐞": "Beetly",
  "🪳": "Cockroach",
  "🦀": "Cancer",
  "🐡": "BlowFish",
  "🐠": "Tropical Fish",
  "🦐": "ShellFish",
};


export default function App() {
function inputemojiHandler(event) {
const userInput = event.target.value;  }
  return (
    <div className="App">
      <h3>
        {" "}
        Welcome Mr.<span> {task}</span>
      </h3>

      <h4>Search emoji! </h4>

      <div id="divid"></div>

      <h4>Emoji in the Library</h4>
    </div>
  );
}

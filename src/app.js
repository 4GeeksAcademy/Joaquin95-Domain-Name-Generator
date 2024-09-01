/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our", "power", "my", "what"];
  let adj = ["morales", "awesome", "greatness", "delicious", "funny"];
  let noun = ["Pizza", "dog", "lift", "gym", "car"];
  let extensions = [".com", ".org", ".net", ".mx", ".us"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let a = 0; a < adj.length; a++)
      for (let n = 0; n < noun.length; n++)
        for (let e = 0; e < extensions.length; e++)
          console.log(pronoun[i] + adj[a] + noun[n] + extensions[e]);
  }
};

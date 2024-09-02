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

  let domainNames = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let a = 0; a < adj.length; a++)
      for (let n = 0; n < noun.length; n++)
        for (let e = 0; e < extensions.length; e++)
          domainNames.push(pronoun[i] + adj[a] + noun[n] + extensions[e]);
  }

  document.body.innerHTML = "<ul></ul>";

  let ul = document.querySelector("ul");

  domainNames.forEach(function(domain) {
    let li = document.createElement("li");
    li.textContent = domain;
    ul.appendChild(li);
  });
};

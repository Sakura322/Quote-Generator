const quoteEl = document.getElementById("quote");
const nameEl = document.getElementById("name");
const btnEl = document.getElementById("btn");
const backEl = document.querySelector("body");
const firstEl = document.querySelector(".first-page");
const clickBtn = document.getElementById("click-btn");
const container = document.querySelector(".container");
// Get quote and fetch API

function getQuote() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "88f9782fe8msh810c96a7cdcae07p1fb273jsn20f9ea24ba2c",
      "X-RapidAPI-Host": "inspiring-quotes.p.rapidapi.com",
    },
  };

  fetch("https://inspiring-quotes.p.rapidapi.com/random?author=Albert", options)
    .then((response) => response.json())
    .then((response) => {
      const quoteRes = response.quote;
      const author = response.author;

      quoteEl.innerHTML = `<p>&ldquo;${quoteRes} &rdquo;</p>`;
      nameEl.innerText = author;

      changeColor();
    })
    .catch((err) => alert("Please try again 🙏"));
}

// Change background color

function getRandomColor() {
  return Math.floor(Math.random() * (255 - 10)) + 10;
}

function getColor() {
  return `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
}

function changeColor() {
  return (backEl.style.backgroundColor = getColor());
}

// show quote

function showQuote() {
  getQuote();
  firstEl.style.display = "none";
  container.style.display = "grid";
}

// Event listner

clickBtn.addEventListener("click", showQuote);

btnEl.addEventListener("click", getQuote);

// btnEl.addEventListener("click", changeColor);

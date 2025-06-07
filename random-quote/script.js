const URL = "https://quotes-api-self.vercel.app/quote";

let quote = document.querySelector(".quote");
let author = document.querySelector(".author");
let btn = document.querySelector(".btn");

const getQuote = async () => {
  let response = await fetch(URL);

  let data = await response.json();
  quote.classList.remove("hide");
  author.classList.remove("hide");

  quote.innerText = `${data.quote}`;
  author.innerText = `- ${data.author}`;
};

btn.addEventListener("click", () => {
  getQuote();
});

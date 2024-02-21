const quote = document.querySelector(".quote-content");
const author = document.querySelector(".author");
const btn = document.querySelector(".Generate");
const numOfQuotes = document.querySelector(".Number-Of-Quotes");
let numOfQuotesCreated = 0;
function getQuote(){  
    fetch("https://quotable.io/random?maxLength=50")
    .then(res => res.json())
    .then(data =>{
        quote.innerHTML = `"${data.content}"`;
        author.innerHTML = data.author;
    })
    numOfQuotesCreated++;
    numOfQuotes.innerHTML = numOfQuotesCreated;
}
btn.addEventListener("click",getQuote)
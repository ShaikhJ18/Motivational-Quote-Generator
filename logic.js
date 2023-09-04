const quote = document.querySelector(".quote-content");
const author = document.querySelector(".author")
const btn = document.querySelector(".Generate")

function getQuote(){  
    fetch("https://quotable.io/random")
    .then(res => res.json())
    .then(data =>{
        quote.innerHTML = `"${data.content}"`;
        author.innerHTML = data.author;
    })
}
btn.addEventListener("click",getQuote)
// logic.js
const API_RANDOM_QUOTE = "https://api.realinspire.live/v1/quotes/random"


const fetchQuote = () => {
    // Fetch quotes from the API
    fetch(API_RANDOM_QUOTE)
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log the full response for debugging
  
        // Get the first quote in the array (assuming the response is an array)
        const quote = data[0]; // The first element in the array
        const content = quote.content; // The quote text
        const author = quote.author; // The author of the quote
  
        // Display the quote and author in the quote-box div
        document.getElementById('quote-box').textContent = `"${content}"`;

      })
      .catch(error => {
        console.error("Error fetching quote:", error);
      });
  };
  

const openMeta = () => {
    window.open("https://www.facebook.com", "_blank")
}
const openx = () => {
    window.open("https://www.x.com", "_blank")
}
const openlinkedin = () => {
    window.open("https://www.linkedin.com", "_blank")
}

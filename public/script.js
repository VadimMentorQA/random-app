document.getElementById("quoteButton").addEventListener("click", function () {
  fetch("http://localhost:3000/api/random-quote")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("quoteDisplay").textContent = data.quote;
      document.getElementById("authorDisplay").textContent = data.author;
    })
    .catch((error) => {
      console.error("Error fetching quote:", error);
      document.getElementById("quoteDisplay").textContent =
        "Failed to fetch quote.";
      document.getElementById("authorDisplay").textContent = "";
    });
});

const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Middleware to serve static files
app.use(express.static("public"));

// Quotes array for the API
const quotes = [
  "Сім раз почитай - один раз тайпінг спід.",
  "Свій тайпінг спід ближче до гугл-доку.",
  "Готуй сані літом, а тайпінг спід - до офферу.",
  "Скажи мені свій тайпінг спід, і я скажу хто ти.",
  "З клави по кнопці - мені тайпінг спід (з миру по нитці - голому сорочка).",
  "Кожна жаба свій тайпінг спід хвалить.",
  "Любиш кататись - люби і тайпінг спід заповняти.",
  "Баба з возу - кобила за тайпінг спід.",
  "Без труда не витягнеш і тайпінг спід із дна.",
  "Скільки вовка не корми, а в студента мейт тайпінг спід більше.",
  "В тихому болоті - тайпінг спід водиться.",
  "В умілого в руках і долото тайпінг спід заповнить.",
  "Дарованого коня за тайпінг спід не садять.",
  "Скажи мені хто твій друг - і обидва за тайпінг спід!",
  "Семеро одного на тайпінг спід не ждуть.",
  "Можна все на світі забувати, сину. Забути не можна тільки тайпінг спід кожної пт.",
];

// API endpoint to get a random quote
app.get("/api/random-quote", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  res.json({ quote: randomQuote, author: "Y. Kostenko", success: true });
});

// Route to render the HTML page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;

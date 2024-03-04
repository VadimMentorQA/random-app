document.getElementById("quoteButton").addEventListener("click", function () {
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

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  document.getElementById("quoteDisplay").textContent = randomQuote;
});

let clickCount = 0;

document.getElementById("quoteButton").addEventListener("click", function () {
  clickCount++;

  if (clickCount === 10) {
    document.getElementById("quoteDisplay").innerHTML =
      '<a href="https://l1nq.com/Mocwj">Oh the server seems to be broken. \nDon\'t click this link, raise a tech support ticket</a>';
  }
});

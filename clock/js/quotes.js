const quotes = [
    {
        qoute:"The way to get started is to quit talking and begin",
        author:"walt disney",
    },

    {
        quote:"abcd",
        author:"alphabet",
    },

    {
        quote:"tttt",
        author:"asdfwett",
    },

    {
        quote:"axcvxc xcvx",
        author:"alpawerasdfet",
    },

    {
        quote:"absdfsdfsdfsdfdsfsfsdfsdfds",
        author:"alxcvxccxvxcvcxvxvxcvxcvxvxcvcxvxcvxcet",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
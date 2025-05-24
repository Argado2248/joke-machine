const programmingJokes = [
    "Why don't programmers like nature? It has too many bugs.",
    "Why did the CSS developer go to therapy? To get rid of his margins.",
    "How do you comfort a JavaScript developer? You console them.",
    "Why did the CSS developer leave the restaurant? Because it had no class.",
    "Why did the JavaScript developer go missing? Because he didn't know when to return.",
    "Why did the HTML tag go to the party? Because it wanted to break the line.",
    "Why do JavaScript developers wear glasses? Because they don't C#.",
    "Why don't programmers like to use inline styles? Because they want to be classy.",
    "Why did the CSS selector break up with the HTML element? It found someone more specific.",
    "Why did the CSS developer apply for a job? They wanted to get a position.",
  ];



function generateRandomNumber() {
    return Math.floor(Math.random() * 10); 
}

let randomNumber = generateRandomNumber();
let randomNumber2 = generateRandomNumber();

while(randomNumber === randomNumber2) {
    randomNumber2 = generateRandomNumber();
}


function triggerJokes(){
    if (randomNumber === 0)
        printJoke = programmingJokes['0'];
    else if (randomNumber === 1)
        printJoke = programmingJokes['1'];
    else if (randomNumber === 2)
        printJoke = programmingJokes['2'];
    else if (randomNumber === 3)
        printJoke = programmingJokes['3'];
    else if (randomNumber === 4)
        printJoke = programmingJokes['4'];
    else if (randomNumber === 5)
        printJoke = programmingJokes['5'];
    else if (randomNumber === 6)
        printJoke = programmingJokes['6'];
    else if (randomNumber === 7)
        printJoke = programmingJokes['7'];
    else if (randomNumber === 8)
        printJoke = programmingJokes['8'];
    else if (randomNumber === 9)
        printJoke = programmingJokes['9'];
    else if (randomNumber === 10)
        printJoke = programmingJokes['10'];
}

triggerJokes();

function triggerJokes2(){
    if (randomNumber2 === 0)
        printJoke2 = programmingJokes['0'];
    else if (randomNumber2 === 1)
        printJoke2 = programmingJokes['1'];
    else if (randomNumber2 === 2)
        printJoke2 = programmingJokes['2'];
    else if (randomNumber2 === 3)
        printJoke2 = programmingJokes['3'];
    else if (randomNumber2 === 4)
        printJoke2 = programmingJokes['4'];
    else if (randomNumber2 === 5)
        printJoke2 = programmingJokes['5'];
    else if (randomNumber2 === 6)
        printJoke2 = programmingJokes['6'];
    else if (randomNumber2 === 7)
        printJoke2 = programmingJokes['7'];
    else if (randomNumber2 === 8)
        printJoke2 = programmingJokes['8'];
    else if (randomNumber2 === 9)
        printJoke2 = programmingJokes['9'];
    else if (randomNumber2 === 10)
        printJoke2 = programmingJokes['10'];
}

triggerJokes2();

console.log('Skämt nummer 1: ', printJoke, '---', ' Skämt nummer 2: ', printJoke2);


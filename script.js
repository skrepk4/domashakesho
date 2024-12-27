function logItems(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(`${i + 1} - ${array[i]}`);
    }
}
logItems(['Mango', 'Poly', 'Ajax']);

function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(' ');
    return words.length * pricePerWord;
}

console.log(calculateEngravingPrice('Hello world', 5));

function findLongestWord(string) {
    const words = string.split(' ');
    let longestWord = '';
    for (let word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    return longestWord;
}
console.log(findLongestWord('Nikita Rostislav Mango'));

function formatString(string) {
    if (string.length <= 40) {
      return string;
    } else {
      return string.slice(0, 40) + '...';
    }
}

console.log(formatString('alalalalalallabababababalalalalalfwqfwqefweqfewqfewqfwqe'));

function checkForSpam(message) {
    const lowerMessage = message.toLowerCase();
    return lowerMessage.includes('spam') || lowerMessage.includes('sale');
  }

console.log(checkForSpam('Free Sale offer now'));  
console.log(checkForSpam('Hello there'));

let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Введіть число:");

  if (input === null) break;

  const number = Number(input);
  if (isNaN(number)) {
    alert("було введено не число, попробуйте ще раз");
  } else {
    numbers.push(number);
  }
}

for (let num of numbers) {
  total += num;
}

console.log(`загальна сума чисел дорівнює ${total}`);
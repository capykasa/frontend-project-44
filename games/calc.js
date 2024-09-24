import {
  makeRandomNumber,
  getRandomIndex,
  askQuestion,
  getAnswer,
  getIncorrectMassage,
  startGame,
} from '../src/index.js';

const brainCalcRules = 'What is the result of the expression?';

const symbols = ['+', '-', '*'];

const getCorrectAnswer = (number1, number2, symbol) => {
  let answer;
  switch (symbol) {
    case '+':
      answer = number1 + number2;
      break;
    case '-':
      answer = number1 - number2;
      break;
    case '*':
      answer = number1 * number2;
      break;
    default:
      answer = 'Incorrect expression';
  }
  return answer;
};

const brainCalcGame = (userName) => {
  const randomNumber1 = makeRandomNumber(101);
  const randomNumber2 = makeRandomNumber(11);
  const randomSymbol = symbols[getRandomIndex(symbols)];

  const expression = `${randomNumber1} ${randomSymbol} ${randomNumber2}`;

  askQuestion(expression);

  const userAnswer = getAnswer();
  const correctAnswer = getCorrectAnswer(randomNumber1, randomNumber2, randomSymbol);

  if (Number(userAnswer) !== correctAnswer) {
    getIncorrectMassage(userAnswer, correctAnswer, userName);
    return false;
  }
  return true;
};

const brainCalc = () => {
  startGame(brainCalcRules, brainCalcGame);
};

export default brainCalc;

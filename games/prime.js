import {
  makeRandomNumber,
  askQuestion,
  getAnswer,
  getIncorrectMassage,
  startGame,
} from '../src/index.js';

const brainPrimeRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkIsPrime = (number) => {
  if (number <= 1) {
    return 'no';
  }

  for (let divider = 2; divider <= Math.sqrt(number); divider += 1) {
    if (number % divider === 0) {
      return 'no';
    }
  }

  return 'yes';
};

const brainPrimeGame = (userName) => {
  const expression = makeRandomNumber(101);

  askQuestion(expression);

  const userAnswer = getAnswer();
  const correctAnswer = checkIsPrime(expression);

  if (userAnswer !== correctAnswer) {
    getIncorrectMassage(userAnswer, correctAnswer, userName);
    return false;
  }
  return true;
};

const brainPrime = () => {
  startGame(brainPrimeRules, brainPrimeGame);
};

export default brainPrime;

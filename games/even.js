import {
  makeRandomNumber,
  askQuestion,
  getAnswer,
  getIncorrectMassage,
  startGame,
} from '../src/index.js';

const brainEvenRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getCorrectAnswer = (expression) => (expression % 2 === 0 || expression === 0 ? 'yes' : 'no');

const brainEvenGame = (userName) => {
  const expression = makeRandomNumber(101);

  askQuestion(expression);

  const userAnswer = getAnswer();
  const correctAnswer = getCorrectAnswer(expression);

  if (userAnswer !== correctAnswer) {
    getIncorrectMassage(userAnswer, correctAnswer, userName);
    return false;
  }
  return true;
};

const brainEven = () => {
  startGame(brainEvenRules, brainEvenGame);
};

export default brainEven;

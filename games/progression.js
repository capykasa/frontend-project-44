import {
  makeRandomNumber,
  getRandomIndex,
  askQuestion,
  getAnswer,
  getIncorrectMassage,
  startGame,
} from '../src/index.js';

const brainProgressionRules = 'What number is missing in the progression?';

const lengthProgression = 9;

const getDataProgression = (begin, step, length) => {
  const progression = [begin];

  for (let i = 0; i < length; i += 1) {
    progression.push(progression[i] + step);
  }

  const hiddenIndex = getRandomIndex(progression);
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';

  return [progression.join(' '), correctAnswer];
};

const brainProgressionGame = (userName) => {
  const beginProgression = makeRandomNumber(101);
  const stepProgression = makeRandomNumber(11, 1);

  const dataProgression = getDataProgression(
    beginProgression,
    stepProgression,
    lengthProgression,
  );
  const expression = dataProgression[0];
  const correctAnswer = dataProgression[1];

  askQuestion(expression);

  const userAnswer = getAnswer();

  if (Number(userAnswer) !== correctAnswer) {
    getIncorrectMassage(userAnswer, correctAnswer, userName);
    return false;
  }
  return true;
};

const brainProgression = () => {
  startGame(brainProgressionRules, brainProgressionGame);
};

export default brainProgression;

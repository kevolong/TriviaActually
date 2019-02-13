const picData = require("../data/pic_data.js"); // Trivia data

function QuizHandler() {
  //Get random integer between min and max
  this.getRandomInt = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }; // end of function getRandomInt()

  //Shuffle an array (Fisher-Yates)
  this.shuffleArray = function(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }; // end of function shuffleArray()

  /** Randomly generate [numQuestions] number of trivia questions from [dataset]
   *    @param  {array}  dataset  -  {object} of question, correct answer, wrong answer ,tag, and difficulty level.
   *    @param  {number}  numQuestions  -  number of questions to generate
   *
   *    RETURN @param  {array}  randQuestions  -  {object} of question, correct answer, answer choices, picture, and category tag
   *      {
   *        question: string
   *        answer: string,
   *        choices: array,
   *        pic: string,
   *        tag: string
   *      }
   */
  this.getQuestions = function(dataset, numQuestions) {
    // Array for random numbers matching question index in dataset array
    let randNums = [];
    for (let i = 0; i < numQuestions; i++) {
      //Loop til unused index used
      while (true) {
        let rand = this.getRandomInt(0, dataset.length - 1);
        if (randNums.length === 0 || randNums.indexOf(rand) === -1) {
          randNums.push(rand);
          break;
        }
      }
    }

    //Array for questions objects with question, correct answer, picture tag, and shuffled answer choices
    let randQuestions = [];
    for (let j = 0; j < numQuestions; j++) {
      //Shuffle choices
      let choices = [dataset[randNums[j]].answer].concat(dataset[randNums[j]].wrong);
      let shuffled = this.shuffleArray(choices);

      //Get picture for tag
      let tag = dataset[randNums[j]].tag.toLowerCase();
      let pic;
      //Validate question tag exists
      if (picData.hasOwnProperty(tag)) {
        pic = picData[tag];
      }
      //If error/typo use random pic from 'main' tag
      else {
        pic = picData.main;
      }

      //Build question object
      randQuestions.push({
        question: dataset[randNums[j]].question,
        answer: dataset[randNums[j]].answer,
        choices: shuffled,
        pic: pic,
        tag: tag
      });
    }

    return randQuestions;
  }; // end of function getQuestions()

  /** Generate quiz for client
   *    @param  [array]  rawQuiz  -  {object} of question, correct answer, answer choices, and picture.
   *
   *    RETURN
   *    {object}
   *      @param  {object}  quiz  -  10 keys based on question number, each with question, answer choices, and picture.
   *        Ex: quiz:
   *              { '1':
   *                  { question: 'String',
   *                    choices: [Array],
   *                    pic: 'String',
   *                    tag: 'String'  }
   *              }
   *      @param  {object}  answer_key  -  10 keys based on question number, each with correct answer.
   *        Ex: answer_key:
   *            {
   *              '1': 'String'
   *            }
   */
  this.makeQuiz = function(rawQuiz) {
    let quiz = {};
    let answer_key = {};
    const picDir = "./images/quiz/";

    for (let i = 0; i < 10; i++) {
      let question = {
        question: rawQuiz[i].question,
        choices: [...rawQuiz[i].choices],
        pic: picDir + rawQuiz[i].pic,
        tag: rawQuiz[i].tag
      };
      let answer = rawQuiz[i].answer;

      quiz[i + 1] = question;
      answer_key[i + 1] = answer;
    }

    return { quiz: quiz, answer_key: answer_key };
  }; // end of function makeQuiz()
}

module.exports = QuizHandler;

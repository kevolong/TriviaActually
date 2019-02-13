/* FAQ data
    Array of questions and answers
*/
const difficultyData = { easy: 6, med: 3, hard: 1 };

module.exports = [
  {
    question: "How is the quiz balanced for difficulty?",
    answer: `Questions are randomly chosen, but each quiz has a set number of questions per difficulty category: ${
      difficultyData.easy
    } easy, ${difficultyData.med} medium, and ${difficultyData.hard} hard.`
  },
  {
    question: "What kind of questions are there?",
    answer:
      "There are a variety of categories: quote fill in the blank, name that character, cast/crew, story/character/detail facts, and production facts."
  },
  {
    question: "How does ranking work?",
    answer:
      "Ranking is based on percentile: the percentage of scores below yours. For example, if you get ranked in the 88th percentile, that means you performed better than 88% of everyone else."
  },
  {
    question: "What if I cheat?",
    answer:
      "There isn't sophisticated software tracking you to make sure you don't google the answers or phone-a-friend. If you cheat, it's simply on your conscience, just as it should be for Jamie's wanker of a brother."
  },
  {
    question: "Who do I contact if I find a mistake or error?",
    answer: "Please feel free to send an email to info@triviaactually.com."
  },
  {
    question: "Is this an official trivia app?",
    answer:
      "No, this is not made by or affiliated with any of the production companies, distributors, or rights holders. It is a fan labor of love, actually! It was made for and is intended for nonprofit educational purposes; all copyrighted images are used under fair use. Please don't sue Kevin."
  }
];

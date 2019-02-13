/**
 *    Result Component
 *        Displays score, ranking, and congrats message/gif
 */
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Result extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.state = {
      showWrong: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false
      }
    };
    this.toggleHidden = this.toggleHidden.bind(this);

    /**
     *Inherited Props
     *  this.State{
     *    results: {                       // Quiz object
     *      Number: {
     *        congrats: 'String'
     *        gif: 'String'
     *        percentile: 'String'
     *      }
     *    },
     *    score: Number
     *    quiz: {                       // Quiz object
     *      Number: {
     *        question: 'String'
     *        choices: [Array] of 4
     *        pic: 'String'
     *      }
     *    }
     *    userAnswers: {                // User answers object
     *      Number: String
     *    },
     *    answers {                     // Answer key object
     *        Number: String
     *    }
     *  }
     *  fetchTrivia()  // Start new quiz
     */
  }

  //Click on wrong answer. Toggle show or hidden state
  toggleHidden(questionNum) {
    let newBool;
    let newObject = { ...this.state.showWrong };
    //Hidden. Show
    if (!this.state.showWrong[questionNum]) {
      newBool = true;
    }
    //Already show. Hide
    else {
      newBool = false;
    }
    newObject[questionNum] = newBool;
    this.setState({ showWrong: newObject });
  }

  render() {
    const score = this.props.score / 10; // Score: questions right out of 10
    const gif = this.props.results.gif;
    const congrats = this.props.results.congrats;
    const rank = this.props.results.percentile;

    let punctuation;
    if (score >= 7) {
      punctuation = "!";
    } else if (score >= 5 && score < 7) {
      punctuation = "";
    } else {
      punctuation = "...";
    }

    return (
      <div id="result-page" className="animated fadeIn faster ribbon-border">
        <div id="result-area" className="thin-ribbon-bottom">
          <h2 id="result-score" className="hel-black red">
            You got {score} of 10{punctuation}
          </h2>

          <div id="result-gif-container">
            <img src={gif} alt={gif} />
          </div>
          <h3 id="result-congrats" className="hel-normal">
            {congrats}
          </h3>
          <h3 id="result-ranking" className="hel-neue-normal">
            <span className="bold">Ranking:</span> {rank} percentile
          </h3>

          <SocialShare score={score} />

          <div id="result-buttons" className="button-row">
            <button
              id="new-quiz-button"
              className="gradient-button subdued big-button"
              onClick={this.props.fetchTrivia}>
              new quiz
            </button>
            <button
              id="open-modal"
              className="gradient-button subdued"
              onClick={this.props.openModal}>
              info
            </button>
          </div>
        </div>

        <AnswerKey
          userAnswers={this.props.userAnswers}
          answers={this.props.answers}
          quiz={this.props.quiz}
          showWrong={this.state.showWrong}
          toggleHidden={this.toggleHidden}
        />
      </div>
    );
  }
} // end of Result component

function SocialShare(props) {
  const scoreString = encodeURIComponent(
    `I got ${props.score} out of 10 in TriviaActually! See what you can get...`
  );
  const triviaURL = encodeURIComponent("https://TriviaActually.com");
  const iconSize = "3x";

  const twitterURL =
    "https://twitter.com/intent/tweet?hashtags=TriviaActually,LoveActually&text=" +
    scoreString +
    " " +
    triviaURL;

  const facebookURL =
    "https://www.facebook.com/sharer/sharer.php?u=" + triviaURL + "&quote=" + scoreString;

  const tumblrURL =
    "https://www.tumblr.com/widgets/share/tool?posttype=link&tags=TriviaActually,LoveActually&title=TriviaActually&caption=" +
    scoreString +
    "&content=" +
    triviaURL +
    "&canonicalUrl=" +
    triviaURL +
    "&shareSource=legacy";
  return (
    <div id="social-share">
      <h4 id="social-title">Share your result:</h4>
      <div id="social-row">
        <a href={facebookURL} id="facebook-icon" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={["fab", "facebook-square"]} size={iconSize} />
        </a>
        <a href={twitterURL} id="twitter-icon" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={["fab", "twitter-square"]} size={iconSize} />
        </a>
        <a href={tumblrURL} id="tumblr-icon" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={["fab", "tumblr-square"]} size={iconSize} />
        </a>
      </div>
    </div>
  );
}

function AnswerKey(props) {
  //Turn userAnswers into array for mapping
  let userAnswersArray = [];
  for (let i = 1; i < 11; i++) {
    userAnswersArray.push(props.userAnswers[i]);
  }

  //Map user answers determine if answer was right or wrong for display
  const answers = userAnswersArray.map((answer, index) => (
    <div>
      {/* Right Answer */}
      {userAnswersArray[index] === props.answers[index + 1] && (
        <div
          className={"answer-result right " + (props.showWrong[index + 1] ? "show" : "hidden")}
          key={"question-" + (index + 1) + "-result-key"}
          value={index + 1}
          onClick={() => props.toggleHidden(index + 1)}>
          <div className="results-question-line">
            {" "}
            <div className="icon-container">
              <FontAwesomeIcon className="result-icon subdued-extra" icon={["fas", "check"]} />
            </div>
            <div>
              <h5 className="result-question">{props.quiz[index + 1].question}</h5>
              {/* Correct Answer*/}
              <div className="spoiler-hide">
                <div>
                  <h4 className="hel-neue-normal">
                    <em>Answer: </em>
                    <span className="hel-neue-bold">{props.answers[index + 1]}</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="icon-container">
              <FontAwesomeIcon className="result-icon subdued-extra" icon={["fas", "check"]} />
            </div>
          </div>
        </div>
      )}
      {/* Wrong Answer */}
      {userAnswersArray[index] !== props.answers[index + 1] && (
        <div
          className={"answer-result wrong " + (props.showWrong[index + 1] ? "show" : "hidden")}
          key={"question-" + (index + 1) + "-result-key"}
          value={index + 1}
          onClick={() => props.toggleHidden(index + 1)}>
          <div className="results-question-line">
            {" "}
            <div className="icon-container">
              <FontAwesomeIcon className="result-icon subdued-extra" icon={["fas", "times"]} />
            </div>
            <div>
              <h5 className="result-question">{props.quiz[index + 1].question}</h5>
              {/* User Answer and Correct Answer*/}
              <div className="spoiler-hide">
                <div>
                  <h4 className="hel-neue-normal">
                    <em>Your Answer: </em>
                    <span className="hel-neue-bold">{userAnswersArray[index]}</span>
                  </h4>
                </div>
                <div>
                  <h4 className="hel-neue-normal">
                    <em>Correct: </em>
                    <span className="hel-neue-bold">{props.answers[index + 1]}</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="icon-container">
              <FontAwesomeIcon className="result-icon subdued-extra" icon={["fas", "times"]} />
            </div>
          </div>
        </div>
      )}
    </div>
  ));

  return (
    <div id="answer-result-key">
      <img src="/images/titles/trivia_actually_answer_key.png" alt="answer key" />
      <h5 id="hover-subtitle">tap to see correct answers</h5>
      <div id="key-box">{answers}</div>
    </div>
  );
} // end of AnswerKey()

export default Result;

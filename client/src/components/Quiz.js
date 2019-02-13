/**
 *    Quiz Component
 *        Cycles through 10 questions
 */
import React, { Component } from "react";

class Quiz extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    /**
     *Inherited Props
     *  this.State{
     *    quiz: {                       // Quiz object
     *      Number: {
     *        question: 'String'
     *        choices: [Array] of 4
     *        pic: 'String'
     *      }
     *    }
     *    currentQuestion: Number       // Current question
     *    selectedChoice: String        // Current value of selected choice
     *    userAnswers: {                // User answers object
     *      Number: String
     *    }
     *  }
     *  submitAnswer()  // Submit answer to parent
     *  previousQuestion() // Go back a question
     *  unCheck()  // Set startChecked to false
     *  submitQuiz() // Finish quiz and submit to sever
     *  handleChoiceChange() // Change selected radio button
     *  openModal() // Show info pop-up modal
     */
  }

  render() {
    //Set variables
    const questionNum = this.props.currentQuestion; // Current question number
    const form = "question-form"; // Form name/id
    const question = this.props.quiz[questionNum].question; // Question string
    const pic = this.props.quiz[questionNum].pic; //Pic URL
    const alt = this.props.quiz[questionNum].tag; // Pic alt string
    let choices;
    let hasChecked = false; // has checked selection or not

    if (this.props.userAnswers.hasOwnProperty(questionNum)) {
      hasChecked = true;
    }

    choices = this.props.quiz[questionNum].choices.map(choice => (
      <label
        id={choice + "-label"}
        className={
          this.props.selectedChoice === choice
            ? "choice-container hel-neue-normal selected"
            : "choice-container hel-neue-normal"
        }
        key={choice + "-radio-input"}
        htmlFor={choice}>
        {choice}
        <input
          type="radio"
          id={choice}
          name={form}
          value={choice}
          required
          checked={this.props.selectedChoice === choice}
          onChange={this.props.handleChoiceChange}
        />
      </label>
    ));

    return (
      <div id="quiz-page" className="animated fadeIn faster ribbon-border">
        {/* Picture and question*/}
        <div id="question-area" className="thin-ribbon-bottom">
          <div id="question-row">
            <div id="question-pic">
              <img src={pic} alt={alt} />
            </div>
            <div id="question">
              <h2>{question}</h2>
            </div>
          </div>
        </div>
        {/* Form: radio inputs and next,back, or finish buttons*/}
        <div id="choices-area">
          <form
            id={form}
            name={form}
            onSubmit={
              this.props.currentQuestion < 10 ? this.props.submitAnswer : this.props.submitQuiz
            }>
            <div id="choices">{choices}</div>
            <div className="button-row">
              {/* Previous Question Button*/}
              {this.props.currentQuestion > 1 && (
                <button
                  id="previous-question"
                  className="red-button"
                  onClick={this.props.previousQuestion}>
                  back
                </button>
              )}
              {/* Next Question Button*/}
              {this.props.currentQuestion < 10 && (
                <button
                  id="next-question"
                  className="red-button"
                  type="submit"
                  disabled={hasChecked ? false : true}>
                  next
                </button>
              )}
              {/* Finish Button*/}
              {this.props.currentQuestion === 10 && (
                <button
                  id="finish-quiz"
                  className="red-button"
                  type="submit"
                  disabled={hasChecked ? false : true}>
                  finish
                </button>
              )}
            </div>
          </form>
        </div>{" "}
        <div id="progress-area" className="subdued">
          <ProgressBar currentQuestion={this.props.currentQuestion} />
        </div>
        {/* end of choices-area*/}
        <div className="button-row">
          <button
            id="open-modal"
            className="gradient-button subdued"
            onClick={this.props.openModal}>
            info
          </button>
        </div>
      </div>
    );
  }
} // end of Start Component

//Question number progress bar
function ProgressBar(props) {
  let questionNum = props.currentQuestion;
  let width = questionNum * 10;

  return (
    <div id="progress-bar-border">
      <div id="progress-bar" style={{ width: width + "%" }}>
        <h5 className=".hel-neue-light">{questionNum}</h5>
      </div>
    </div>
  );
}

export default Quiz;

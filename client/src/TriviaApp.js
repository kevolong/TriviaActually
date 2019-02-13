import React, { Component } from "react";
import Start from "./components/Start";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import InfoModal from "./components/InfoModal";
import ErrorBoundary from "./components/ErrorBoundary";

import { library } from "@fortawesome/fontawesome-svg-core";
// eslint-disable-next-line
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faCheck, faTimes);

const loadTime = 1000; // Minimum time for loading graphic animation til state change

class TriviaApp extends Component {
  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {
      quiz: {}, // Quiz object with question numbers, each with question, answer choices, pics, and tags
      answers: {}, // Answer key
      currentQuestion: 0, //Current question
      userAnswers: {}, // Users answers,
      selectedChoice: "", // Current selected radio input choice
      score: 0, // Score out of 100
      results: {}, // Results object with message, gif, and ranking
      mode: "start", // Current mode of app
      showModal: false // Show info pop-up modal,
    };
    this.fetchTrivia = this.fetchTrivia.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
    this.previousQuestion = this.previousQuestion.bind(this);
    this.handleChoiceChange = this.handleChoiceChange.bind(this);
    this.submitQuiz = this.submitQuiz.bind(this);
    this.scoreQuiz = this.scoreQuiz.bind(this);
    this.postScore = this.postScore.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.goHome = this.goHome.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown.bind(this));
  }

  handleKeyDown(event) {
    //Esc key (close modal if showing)
    if (event.keyCode === 27 && this.state.showModal) {
      this.closeModal();
    }
  }
  //Fetches a quiz from the server and updates state with quiz, answer key, userAnswers, score, results, and mode
  fetchTrivia() {
    //Loading graphic
    this.setState({ mode: "loading" });

    //Use 1 second time out so loading animation has time to play if server is fast
    setTimeout(
      function() {
        return fetch("/api/trivia")
          .then(res => res.json())
          .then(resJSON => {
            this.setState(
              {
                quiz: resJSON.quiz,
                answers: resJSON.answer_key,
                currentQuestion: 1,
                userAnswers: {},
                score: 0,
                results: {},
                mode: "quiz"
              },
              function() {}
            );
          })
          .catch(error => {
            console.error(error);
          });
      }.bind(this),
      loadTime
    );
  } // end of fetchTrivia()

  //User submits answer.
  //Update state with question number and check if user has answered next question already to start checked.
  submitAnswer(event) {
    event.preventDefault();

    //Modify current question
    let nextQuestion = this.state.currentQuestion;
    nextQuestion++;

    //Check if user already answered next question
    let choice = "";
    if (this.state.userAnswers.hasOwnProperty(nextQuestion)) {
      choice = this.state.userAnswers[nextQuestion];
    }

    //Update state
    this.setState({
      currentQuestion: nextQuestion,
      selectedChoice: choice
    });
  } // end of submitAnswer()

  //User goes back one question.
  //Update state with decrease question count and set answer for previous question to be selected.
  previousQuestion(event) {
    event.preventDefault();

    //Modify current Question
    let prevQuestion = this.state.currentQuestion;
    prevQuestion--;

    //Modify selected choice
    let prevChoice = this.state.userAnswers[prevQuestion];

    //Update State
    this.setState({ currentQuestion: prevQuestion, selectedChoice: prevChoice });
  }

  //Handle radio button selection, update state for selected choice and user answer
  handleChoiceChange(event) {
    //Get user answer
    const choice = event.target.value;

    //Modify userAnswers object
    let newUserAnswers = this.state.userAnswers;
    newUserAnswers[this.state.currentQuestion] = choice;

    //Update state
    this.setState({ userAnswers: newUserAnswers, selectedChoice: choice });
  }

  //User submits final answer.
  //Update state with user answer trigger score posting
  submitQuiz(event) {
    event.preventDefault();

    //Get user answer
    const userAnswer = document.getElementById("question-form")["question-form"].value;
    //Modify userAnswers object
    let userAnswers = this.state.userAnswers;
    userAnswers[this.state.currentQuestion] = userAnswer;

    //Run scoring
    this.scoreQuiz();
  } // end of submitQuiz

  //Compare user answers with answer key and tally score
  scoreQuiz() {
    let numRight = 0; // Number of questions answered correctly
    //Loop through 1-10 and compare user answers with answer key
    for (let i = 1; i <= 10; i++) {
      if (this.state.userAnswers[i] === this.state.answers[i]) {
        numRight += 1;
      }
    }
    const score = numRight * 10; // Score is out of 100
    //Update state
    this.setState({ score: score });
    //Run score posting
    this.postScore(score);
  }

  //Post score to server and get results back
  postScore(score) {
    //Loading graphic
    this.setState({ mode: "loading" });

    //Use 1 second time out so loading animation has time to play if server is fast
    setTimeout(
      function() {
        return fetch("/api/score", {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          },
          body: JSON.stringify({
            score: score
          })
        })
          .then(res => res.json())
          .then(resJSON => {
            this.setState(
              {
                results: {
                  congrats: resJSON.congrats,
                  gif: resJSON.gif,
                  percentile: resJSON.percentile
                },
                mode: "result"
              },
              function() {}
            );
          })
          .catch(error => {
            console.error(error);
          });
      }.bind(this),
      500
    );
  }

  //Open Modal
  openModal() {
    this.setState({ showModal: true });
  }

  //Animate out modal, then set show state to false
  closeModal() {
    const modal = document.getElementById("info-modal");
    modal.className = "animated slideOutUp faster";
    setTimeout(
      function() {
        this.setState({ showModal: false });
      }.bind(this),
      600
    );
  }

  // Reset state to default
  goHome() {
    //Fade Out
    document.getElementById("quiz-page").className = "animated fadeOut faster";

    //Change state after fadeout
    setTimeout(
      function() {
        this.setState({
          quiz: {},
          answers: {},
          currentQuestion: 0,
          userAnswers: {},
          selectedChoice: "",
          score: 0,
          results: {},
          mode: "start",
          showModal: false
        });
      }.bind(this),
      500
    );
  }
  render() {
    return (
      <div>
        <ErrorBoundary>
          {this.state.showModal && <InfoModal closeModal={this.closeModal} />}
          {this.state.mode === "start" && (
            <Start fetchTrivia={this.fetchTrivia} openModal={this.openModal} />
          )}
          {this.state.mode === "loading" && <Loading />}
          {this.state.mode === "quiz" && (
            <Quiz
              quiz={this.state.quiz}
              currentQuestion={this.state.currentQuestion}
              selectedChoice={this.state.selectedChoice}
              handleChoiceChange={this.handleChoiceChange}
              userAnswers={this.state.userAnswers}
              submitAnswer={this.submitAnswer}
              previousQuestion={this.previousQuestion}
              submitQuiz={this.submitQuiz}
              openModal={this.openModal}
              goHome={this.goHome}
            />
          )}
          {this.state.mode === "result" && (
            <Result
              results={this.state.results}
              fetchTrivia={this.fetchTrivia}
              score={this.state.score}
              quiz={this.state.quiz}
              userAnswers={this.state.userAnswers}
              answers={this.state.answers}
              openModal={this.openModal}
            />
          )}
        </ErrorBoundary>
      </div>
    );
  }
}

//Loading graphic
function Loading() {
  return (
    <div id="loading-graphic">
      <img className="loading-heart" src="/images/svg/Heart_font_awesome.svg" alt="loading-heart" />
    </div>
  );
}

export default TriviaApp;

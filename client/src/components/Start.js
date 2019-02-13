/* 
    Start Component
        Welcome page with start button 
*/
import React, { Component } from "react";

class Start extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="start-page" className="animated fadeIn faster">
        <h2 id="start-title" className="hel-black red">
          How much do you love Love Actually, actually?
        </h2>
        <h3 id="start-sub-titles" className="hel-neue-normal">
          ten questions
          <br />
          randomly chosen
          <br />
          balanced for difficulty
          <br />
          new quiz every time
        </h3>
        <div className="button-row">
          <button id="start-button" className="gradient-button" onClick={this.props.fetchTrivia}>
            start
          </button>
          <button id="open-modal" className="gradient-button" onClick={this.props.openModal}>
            info
          </button>
        </div>
        <h5 id="warning" className="hel-neue-normal">
          (Warning: adult language and sexual references)
        </h5>
      </div>
    );
  }
} // end of Start Component

export default Start;

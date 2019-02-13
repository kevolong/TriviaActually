/**
 *    InfoModal Component
 *        Modal pop-up with FAQ, Copyright/licensing, and Contact
 */
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import faqData from "../data/faq_data.js";

class InfoModal extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "faq" // Current page content to display
    };
    this.changePage = this.changePage.bind(this);
    /**
     *Inherited Props
     *  closeModal() // close Modal
     */
  } // end of constructor

  changePage(newPage) {
    this.setState({ currentPage: newPage });
  }

  render() {
    return (
      <div id="info-modal" className="animated slideInDown faster">
        <div id="modal-box" className="ribbon-border">
          <div id="modal-header">
            <div id="modal-title">
              <img src="/images/titles/trivia_actually_info.png" alt="info" />
            </div>
            <div id="close-modal-icon">
              <FontAwesomeIcon
                icon={["fas", "times"]}
                onClick={this.props.closeModal}
                size="2x"
                transform="shrink-4"
              />
            </div>
          </div>
          <div id="modal-menu" className="extra-thin-ribbon-bottom">
            <h3
              className={this.state.currentPage === "faq" ? "modal-link active" : "modal-link"}
              value="faq"
              onClick={() => this.changePage("faq")}>
              FAQ
            </h3>
            <h3
              className={this.state.currentPage === "contact" ? "modal-link active" : "modal-link"}
              value="contact"
              onClick={() => this.changePage("contact")}>
              Contact
            </h3>
          </div>
          <div id="modal-body">
            {this.state.currentPage === "faq" && <FaqPage />}
            {this.state.currentPage === "contact" && <ContactPage />}
          </div>
        </div>
      </div>
    );
  }
} // end of InfoModal Component

//FAQ page content
function FaqPage() {
  const faqs = faqData.map((entry, index) => (
    <div className="faq-set" key={"faq-" + index}>
      <h4 className="hel-black red">{entry.question}</h4>
      <p className="hel-neue-normal">{entry.answer}</p>
    </div>
  ));

  return <div id="faq-page">{faqs}</div>;
}

//Contact page content
function ContactPage() {
  return (
    <div id="contact-page">
      <div className="contact-set">
        <p>All questions, comments, and error reporting can be made to:</p>
        <a className="hel-black" href="mailto:info@triviaactually.com">
          info@triviaactually.com
        </a>
      </div>
      <div className="contact-set">
        <p>This app was coded and designed by Kevin Long. To see his work, please visit:</p>
        <a
          className="hel-black"
          href="https://kevinandrewlong.com"
          target="_blank"
          rel="noopener noreferrer">
          KevinAndrewLong.com
        </a>
      </div>
    </div>
  );
}

export default InfoModal;

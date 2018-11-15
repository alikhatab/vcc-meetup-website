import React, { Component } from "react";
import axios from "axios";
import Button from "../button";
import "./style.css";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      status: 0
    };
  }

  joinSlack() {
    const email = prompt("Enter email here:");

    if (email !== null && email.includes("@")) {
      axios
        .post("https://personal-mail-api.tk/email/sendMail", {
          email: email,
          text: "Jag vill gå med i slack-gruppen för Västerås Coffee and Code!"
        })
        .then(response => {
          if (response.status === 200) {
            this.setState({
              status: 200
            });
          }
        })
        .catch(error => {
          this.setState({
            status: "err"
          });
        });
    } else {
      this.setState({
        status: "err"
      });
    }
  }

  render() {
    return (
      <header>
        <div className="header-content">
          <h1>Coffee & Code</h1>
          <h2>
            Meetup-group for developers and anyone interested in general
            programming.
          </h2>

          <div className="button-wrapper">
            <a
              href="https://www.meetup.com/Vasteras-Coffee-and-Code/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button secondary>Join Meetup Group</Button>
            </a>

            <div
              onClick={() => {
                this.setState({
                  status: 0
                });
                this.joinSlack();
              }}
            >
              <Button secondary>Join Slack Group</Button>
            </div>
          </div>

          {this.state.status === 200 && (
            <div className="status-container">
              <h3>You'll recieve a invite by email shortly!</h3>
            </div>
          )}

          {this.state.status === "err" && (
            <div className="status-container-err">
              <h3>Something went wrong. Try again later!</h3>
            </div>
          )}
        </div>
      </header>
    );
  }
}

export default Header;

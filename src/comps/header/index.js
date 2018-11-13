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
          <h1>Västerås Coffee & Code</h1>
          <div className="info">
            <h2>65+ members</h2>
            <h2>|</h2>
            <h2>Västerås, Sweden</h2>
            <h2>|</h2>
            <h2>Every Wednesday 6 PM</h2>
          </div>
          <div className="button-wrapper">
            <a href="https://www.meetup.com/Vasteras-Coffee-and-Code/">
              <Button>Join Meetup Group</Button>
            </a>

            <div
              onClick={() => {
                this.setState({
                  status: 0
                });
                this.joinSlack();
              }}
            >
              <Button>Join Slack Group</Button>
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

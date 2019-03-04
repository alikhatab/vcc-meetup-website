import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../button";
import ill1 from "../../images/ill-1.png";
import ill2 from "../../images/ill-2.png";
import ill3 from "../../images/ill-3.png";
import "./style.css";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      status: 0
    };
  }

  /* joinSlack() {
    const email = prompt("Enter email here:");

    if (email !== null && email.includes("@")) {
      axios
        .post("https://personal-mail-api.tk/email/sendMail", {
          email,
          text: "Jag vill gå med i slack-gruppen för Västerås Coffee and Code!"
        })
        .then(response => {
          if (response.status === 200) {
            this.setState({
              status: 200
            });
          }
        })
        .catch(() => {
          this.setState({
            status: "err"
          });
        });
    } else {
      this.setState({
        status: "err"
      });
    }
  } */

  render() {
    return (
      <header>
        <Link to="/" href="/">
          <h4>Coffee&Code™</h4>
        </Link>

        <div className="header-content">
          <img src={ill1} className="illustration" alt="" />
          <img src={ill2} className="illustration2" alt="" />
          <img src={ill3} className="illustration3" alt="" />

          <h1>
            Träffa likasinnade och koda. Välkommen till Coffee and Code.
            <span role="img" aria-label="emoji">
              ⚡️
            </span>
          </h1>

          <a
            href="https://www.meetup.com/Vasteras-Coffee-and-Code/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button secondary>Gå med i gruppen</Button>
          </a>

          {/* <div */}
          {/*   onClick={() => { */}
          {/*     this.setState({ */}
          {/*       status: 0 */}
          {/*     }); */}
          {/*     this.joinSlack(); */}
          {/*   }} */}
          {/* > */}
          {/*   <Button secondary>Join Slack Group</Button> */}
          {/* </div> */}

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

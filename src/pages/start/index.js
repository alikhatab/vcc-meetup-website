import React, { Component } from "react";
import AirbrakeClient from "airbrake-js";
import axios from "axios";
import Header from "../../comps/header";
import Section from "../../comps/section";
import MeetupCard from "../../comps/meetupCard";
import Member from "../../comps/member";
import News from "../../comps/news";
import Button from "../../comps/button";
import "./style.css";

const airbrake = new AirbrakeClient({
  projectId: 208135,
  projectKey: "fddc71dc1a8d1ae6fac705005a65b7d1",
  environment: "production"
});

class Start extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      members: []
    };
  }

  componentDidMount() {
    axios
      .get("https://personal-mail-api.tk/events")
      .then(res => {
        this.setState({
          events: res.data
        });
      })
      .catch(() => {
        const promise = airbrake.notify(
          "Error: Could not fetch events data from API!"
        );
        promise.then(notice => {
          this.setState({ notice });
        });
      });

    axios
      .get("https://personal-mail-api.tk/members")
      .then(res => {
        this.setState({
          members: res.data
        });
      })
      .catch(() => {
        const promise = airbrake.notify(
          "Error: Could not fetch members data from API!"
        );
        promise.then(notice => {
          this.setState({ notice });
        });
      });
  }
  render() {
    const { events, members, notice } = this.state;

    return (
      <div>
        {notice && (
          <div className="notice">
            {notice.errors[0].message}{" "}
            <span onClick={() => this.setState({ notice: null })}>Close</span>
          </div>
        )}
        <Header />
        <Section>
          <h1>Nyheter och information</h1>
          <News />
        </Section>
        <Section>
          <h1>Medlemmar</h1>
          <div className="members">
            {members.map(member => (
              <Member key={member} data={member} />
            ))}
          </div>

          <a
            href="https://www.meetup.com/Vasteras-Coffee-and-Code/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button secondary>Gå med i gruppen</Button>
          </a>
        </Section>
        <Section>
          <h1>Kommande events</h1>

          <div className="meetups">
            {events
              .filter(
                event =>
                  events.indexOf(event) < 5 && event.status === "upcoming"
              )
              .map(event => (
                <MeetupCard key={event.id} event={event} />
              ))}
          </div>
          <a
            href="https://meetup.com/Vasteras-Coffee-and-Code/events"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            See more meetups
          </a>
        </Section>
      </div>
    );
  }
}

export default Start;

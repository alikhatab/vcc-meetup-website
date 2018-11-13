import React, { Component } from "react";
import axios from "axios";
import Header from "../../comps/header";
import Section from "../../comps/section";
import MeetupCard from "../../comps/meetupCard";
import "./style.css";

class Start extends Component {
  constructor() {
    super();
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    axios
      .get("https://meetup-api-wohgbceoav.now.sh/events")
      .then(res => {
        this.setState({
          events: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const { events } = this.state;

    return (
      <div>
        <Header />
        <Section>
          <h1>Upcoming meetups</h1>

          <div className="meetups">
            {events
              .filter(event => events.indexOf(event) < 5)
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
            Show more meetups...
          </a>
        </Section>
      </div>
    );
  }
}

export default Start;

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
    return (
      <div>
        <Header />
        <Section>
          <h1>Upcoming meetups</h1>
          <div className="meetups">
            {this.state.events.map(event => (
              <MeetupCard event={event} />
            ))}
          </div>
        </Section>
      </div>
    );
  }
}

export default Start;

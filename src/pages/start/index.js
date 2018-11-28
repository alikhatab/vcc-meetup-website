import React, { Component } from "react";
import axios from "axios";
import Header from "../../comps/header";
import Section from "../../comps/section";
import MeetupCard from "../../comps/meetupCard";
import Member from "../../comps/member";
import "./style.css";

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
      .get("https://personal-mail-api.tk/meetup/events")
      .then(res => {
        this.setState({
          events: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get("https://personal-mail-api.tk/meetup/members")
      .then(res => {
        this.setState({
          members: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const { events, members } = this.state;

    return (
      <div>
        <Header />
        <Section>
          <h1>Members</h1>
          <div className="members">
            {members.map(member => (
              <Member key={member} data={member} />
            ))}
          </div>
        </Section>
        <Section>
          <h1>Upcoming meetups</h1>

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

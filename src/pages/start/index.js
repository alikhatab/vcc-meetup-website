import React, { Component } from 'react';
import AirbrakeClient from 'airbrake-js';
import axios from 'axios';
import Header from '../../comps/header';
import Section from '../../comps/section';
import MeetupCard from '../../comps/meetupCard';
import Member from '../../comps/member';
import './style.css';

const airbrake = new AirbrakeClient({
  projectId: 208135,
  projectKey: 'fddc71dc1a8d1ae6fac705005a65b7d1',
  environment: 'development',
});

class Start extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      members: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://personal-mail-api.tk/meetup/event')
      .then(res => {
        this.setState({
          events: res.data,
        });
      })
      .catch(err => {
        console.log(err);

        const promise = airbrake.notify(
          'Error: Could not fetch data from API!',
        );
        promise.then(function(notice) {
          if (notice.id) {
            console.log('notice id', notice.id);
          } else {
            console.log('notify failed', notice.error);
          }
        });
      });

    axios
      .get('https://personal-mail-api.tk/meetup/members')
      .then(res => {
        this.setState({
          members: res.data,
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
                  events.indexOf(event) < 5 && event.status === 'upcoming',
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

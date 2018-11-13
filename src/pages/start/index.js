import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import Header from "../../comps/header";
import Section from "../../comps/section";
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
              <a
                key={event.id}
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="meetup-card">
                  <div className="info">
                    <h3>
                      <span>
                        {
                          moment(event.local_date)
                            .format("ll")
                            .split(",")[0]
                            .split(" ")[1]
                        }
                      </span>
                      <span>
                        {
                          moment(event.local_date)
                            .format("ll")
                            .split(",")[0]
                            .split(" ")[0]
                        }
                      </span>
                    </h3>
                    <div>
                      <h2>{event.name}</h2>
                      <h4>
                        {event.yes_rsvp_count} are people going |{" "}
                        {event.rsvp_limit - event.yes_rsvp_count} spots left
                      </h4>
                    </div>
                  </div>
                  <p>
                    {/* Need to slice to remove html p tags from data */}
                    {event.description.slice(3, event.description.length - 5)}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </Section>
      </div>
    );
  }
}

export default Start;

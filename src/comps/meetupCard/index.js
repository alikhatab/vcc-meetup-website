import React, { Component } from "react";
import moment from "moment";
import "./style.css";

class MeetupCard extends Component {
  render() {
    const { event } = this.props;

    return (
      <div>
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
                  {event.yes_rsvp_count} people are going |{" "}
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
      </div>
    );
  }
}

export default MeetupCard;

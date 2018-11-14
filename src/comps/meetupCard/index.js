import React, { Component } from "react";
import moment from "moment";
import "./style.css";

class MeetupCard extends Component {
  render() {
    const { event } = this.props;
    const {
      link,
      local_date,
      name,
      yes_rsvp_count,
      rsvp_limit,
      description,
      local_time
    } = event;

    return (
      <div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="meetup-card">
            <div className="info">
              <h3>
                <span>
                  {
                    moment(local_date)
                      .format("ll")
                      .split(",")[0]
                      .split(" ")[1]
                  }
                </span>
                <span>
                  {
                    moment(local_date)
                      .format("ll")
                      .split(",")[0]
                      .split(" ")[0]
                  }
                </span>
              </h3>
              <div>
                <h2>
                  {local_time} | {name}
                </h2>
                <h4>
                  {yes_rsvp_count} people are going |{" "}
                  {rsvp_limit - yes_rsvp_count} spots left
                </h4>
              </div>
            </div>
            <p>
              {/* Need to slice to remove html p tags from data */}
              {description.slice(3, description.length - 5)}
            </p>
          </div>
        </a>
      </div>
    );
  }
}

export default MeetupCard;

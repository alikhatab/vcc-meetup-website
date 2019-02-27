import React from "react";
import moment from "moment";
import "./style.css";

const MeetupCard = props => {
  const { event } = props;
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
          <p>{description.replace(/<p>/g, "").replace(/<\/p>/g, "")}</p>
        </div>
      </a>
    </div>
  );
};

export default MeetupCard;

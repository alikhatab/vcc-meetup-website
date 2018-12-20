import React from "react";
import Placeholder from "../../images/coding.jpg";
import "./style.css";

const Member = props => {
  const { data } = props;
  const { photo, id } = data;

  return (
    <a
      href={`https://www.meetup.com/Vasteras-Coffee-and-Code/members/${id}/`}
      className="member"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className="img"
        style={{
          backgroundImage: `url(${photo ? photo.thumb_link : Placeholder})`
        }}
      />
    </a>
  );
};

export default Member;

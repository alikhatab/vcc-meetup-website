import React from "react";
import { Link } from "react-router-dom";
import news from "../../news";
import "./style.css";

const News = () => (
  <div className="cards">
    {news.map(newsItem =>
      newsItem.route ? (
        <Link
          to={newsItem.route}
          href={newsItem.route}
          className="card"
          style={{
            backgroundColor: newsItem.placeholder
              ? "#eee"
              : newsItem.background,
            backgroundImage:
              newsItem.backgroundImage && `url(${newsItem.backgroundImage})`
          }}
        >
          {!newsItem.placeholder && <h3>{newsItem.title}</h3>}
        </Link>
      ) : (
        <div
          className="card"
          style={{
            backgroundColor: newsItem.placeholder
              ? "#eee"
              : newsItem.background,
            backgroundImage:
              newsItem.backgroundImage && `url(${newsItem.backgroundImage})`
          }}
        >
          {!newsItem.placeholder && <h3>{newsItem.title}</h3>}
        </div>
      )
    )}
  </div>
);

export default News;

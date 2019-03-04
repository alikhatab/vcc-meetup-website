import React from "react";
import { Link } from "react-router-dom";
import Button from "../../comps/button";
import moment from "moment";
import news from "../../news";
import "./style.css";

const NewsItem = props => {
  const { match } = props;

  const newsItem = news
    .filter(i => i.route === `/${match.params.newsId}`)
    .map(i => i)[0];

  return newsItem ? (
    <div>
      <Link to="/" href="/">
        <h4 className="logo">Coffee&Code™</h4>
      </Link>
      <Link to="/" href="/" className="back">
        <p>Tillbaks</p>
      </Link>
      <div className="newsItem">
        <h1>{newsItem.title}</h1>
        <h3>{moment(new Date(newsItem.date)).format("YYYY-MM-DD")}</h3>
        <p>{newsItem.text}</p>
      </div>
    </div>
  ) : (
    <div>
      <Link to="/" href="/">
        <h4 className="logo">Coffee&Code™</h4>
      </Link>
      <Link to="/" href="/" className="back">
        <p>Tillbaka</p>
      </Link>
      <div className="newsItem">
        <h2>Den här nyheten finns tyvärr inte längre...</h2>
        <div className="gif">
          <iframe
            title="404"
            src="https://giphy.com/embed/YyKPbc5OOTSQE"
            width="500px"
            height="300px"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          />
        </div>
        <Link to="/" href="/">
          <Button>Gå tillbaka</Button>
        </Link>
      </div>
    </div>
  );
};

export default NewsItem;

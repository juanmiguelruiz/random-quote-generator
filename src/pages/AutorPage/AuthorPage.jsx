import React, { useEffect, useState } from "react";
import useAxios from "axios-hooks";

import Quote from "../../components/Quote";
import Footer from "../../components/Footer";
import { connect } from "react-redux";
import {selectActiveAuthor} from "../../store/author/reducer";

const AuthorPage = ({ author}) => {
  const [quotes, setQuotes] = useState([]);

  const [{ data }] = useAxios({
    method: "GET",
    url:
      `https://quote-garden.herokuapp.com/api/v2/authors/${author}?page=1&limit=10`,
  });

  useEffect(() => {
    if (data) {
      setQuotes(data.quotes);
    }
  });

  return (
    <div>
      {console.log(quotes)}
      <div className="container">
        <h1 className="author__author-page">{author}</h1>
        {quotes.map((i) => (
          <Quote text={i.quoteText} />
        ))}
        <Footer className_="footer__author" />
      </div>
    </div>
  );
};

function mapStateToProps(state){
  return {
    author: selectActiveAuthor(state),
  };
};

export default connect(mapStateToProps)(AuthorPage);

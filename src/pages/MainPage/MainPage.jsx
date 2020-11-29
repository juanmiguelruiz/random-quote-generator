import React, { useEffect, useRef, useState } from "react";
import useAxios from "axios-hooks";

import RandomButton from "../../components/RandomButton";
import Quote from "../../components/Quote";
import Footer from "../../components/Footer";
import Author from "../../components/Author/Author";
import updateAuthor from "../../store/author/action"
import { connect } from "react-redux";

const MainPage = ({updateAuthor}) => {
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();
  const [genre, setGenre] = useState();

  const [{ data }, refetch] = useAxios({
    method: "GET",
    url: "https://quote-garden.herokuapp.com/api/v2/quotes/random",
  });

  useEffect(() => {
    if (data) {
      setQuote(data.quote.quoteText);
      setAuthor(data.quote.quoteAuthor);
      setGenre(data.quote.quoteGenre);
      updateAuthor(author) 
    }
  });

  return (
    <div>
      <RandomButton refetch={refetch} />
      <div className="container">
        <Quote text={quote} />
        <Author name={author} category={genre} />
        <Footer className_="footer__quote" />
      </div>
    </div>
  );
};

export default connect(null,{updateAuthor})(MainPage);

import React, { useEffect, useState } from "react";
import useAxios from "axios-hooks";

import RandomButton from "../../components/RandomButton";
import Quote from "../../components/Quote";
import Footer from "../../components/Footer";

const AuthorPage = () => {
  const [quotes, setQuotes] = useState([]);
  const [author, setAuthor] = useState();

  const [{ data }, refetch] = useAxios({
    method: "GET",
    url:
      "https://quote-garden.herokuapp.com/api/v2/authors/Bill%20Gates?page=1&limit=10",
  });

  useEffect(() => {
    if (data) {
      setAuthor(data.quotes[0].quoteAuthor);
      setQuotes(data.quotes);
    }
  });

  return (
    <div>
      {console.log(quotes)}
      <RandomButton />
      <div className="container">
        <h1 className="author__author-page">{author}</h1>

        {quotes.map((i) => (
         <Quote text={i.quoteText} />
        // console.log(i)
        ))}

        <Quote />
        <Quote />
        <Footer className_="footer__author" />
      </div>
    </div>
  );
};

export default AuthorPage;

import React from 'react';
import RandomButton from "../../components/RandomButton";
import Quote from "../../components/Quote";
import Footer from "../../components/Footer";

const AuthorPage = () =>{
    return(
        <div>
        <RandomButton />
        <div className="container">
        <h1 className="author__author-page">Bill Gates</h1>

          <Quote/>
          <Quote/>
          <Quote/>
          <Footer className_="footer__author"/>
        </div>
      </div>
    );
}

export default AuthorPage;



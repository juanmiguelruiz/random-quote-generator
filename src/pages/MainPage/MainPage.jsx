import React from "react";
import RandomButton from "../../components/RandomButton";
import Quote from "../../components/Quote";
import Footer from "../../components/Footer";
import Author from "../../components/Author/Author";



const MainPage = () => {
  return (
    <div>
      <RandomButton />
      <div className="container">
        <Quote/>
        <Author/>
        <Footer/>
      </div>
    </div>
  );
};

export default MainPage;

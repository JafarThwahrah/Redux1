import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
export const Home = (props) => {
  console.log(props);
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

const readStateFromStoreAndPassItToProps = (state) => {
  return { accounts: state.accounts };
};

export default connect(readStateFromStoreAndPassItToProps)(Home);

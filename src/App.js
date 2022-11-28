import "./App.css";
import Home from "./Home";
import { connect } from "react-redux";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

const readStateFromStoreAndPassItToProps = (state) => {
  return { accounts: state.accounts };
};

export default connect(readStateFromStoreAndPassItToProps)(App);

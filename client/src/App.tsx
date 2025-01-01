import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>JS Monorepo: Routing</h1>
      <h2>Wild Séries</h2>
      <Link to="/programs">
        <button id="home-btn" type="button">
          More
        </button>
      </Link>
    </>
  );
}

export default App;

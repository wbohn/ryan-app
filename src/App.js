import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={process.env.PUBLIC_URL + "/tat.jpg"}
          className="App-logo"
          alt="logo"
        />
      </header>
    </div>
  );
}

export default App;

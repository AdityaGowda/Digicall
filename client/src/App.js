import logo from "./logo.svg";
import "./App.css";
import DigiHeader from "./component/common/header/header";
import Dashboard from "./component/dashboard/dashboard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DigiHeader />
        <Dashboard />
      </header>
    </div>
  );
}

export default App;

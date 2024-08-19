import logo from "./logo.svg";
import "./App.css";
import DigiHeader from "./component/common/header/header";
import Dashboard from "./component/dashboard/dashboard";
import UpcomingMeet from "./component/VedioConference/upcoming";
import Login from "./component/login/login";
import SignUp from "./component/signup/signup";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DigiHeader />
      </header>
      {/* <Dashboard /> */}
      <SignUp />
    </div>
  );
}

export default App;

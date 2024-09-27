import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DigiHeader from "./component/common/header/header";
import Dashboard from "./component/dashboard/dashboard";
import UpcomingMeet from "./component/VedioConference/upcoming";
import Login from "./component/login/login";
import SignUp from "./component/signup/signup";

function App() {
  return (
    <BrowserRouter>
      <DigiHeader />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upcoming-meet" element={<UpcomingMeet />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

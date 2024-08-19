import React, { useState } from "react";
import "./dashboard.css";
import Close from "../../assets/svg/close";
import CreateMeetButton from "./components/createMeetButton";
import { ShowCreateMeetPopUp } from "./components/createMeetPopUpBlock";
import UpcomingMeet from "../VedioConference/upcoming";

function Dashboard() {
  const [showCreateMeetPopUp, setshowCreateMeetPopUp] = useState(false);
  function showCreateMeetPopUpBox() {
    setshowCreateMeetPopUp((e) => !e);
  }
  return (
    <div className="dashboardContainer">
      <div>
        <CreateMeetButton onclickFunc={showCreateMeetPopUpBox} />
      </div>
      {showCreateMeetPopUp && (
        <ShowCreateMeetPopUp showCreateMeetPopUpBox={showCreateMeetPopUpBox} />
      )}
      <UpcomingMeet />
    </div>
  );
}
export default Dashboard;

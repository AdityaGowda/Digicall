import React, { useState } from "react";
import "./dashboard.css";
import Close from "../../assets/svg/close";
import CreateMeetButton from "./components/createMeetButton";
import { ShowCreateMeetPopUp } from "./components/createMeetPopUpBlock";

function Dashboard() {
  const [showCreateMeetPopUp, setshowCreateMeetPopUp] = useState(false);
  function showCreateMeetPopUpBox() {
    setshowCreateMeetPopUp((e) => !e);
  }
  return (
    <div className="dashboardContainer">
      <CreateMeetButton onclickFunc={showCreateMeetPopUpBox} />
      {showCreateMeetPopUp && (
        <ShowCreateMeetPopUp showCreateMeetPopUpBox={showCreateMeetPopUpBox} />
      )}
    </div>
  );
}
export default Dashboard;

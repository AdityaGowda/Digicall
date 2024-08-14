import React, { useState } from "react";
import "./dashboard.css";
import Close from "../../assets/svg/close";

function Dashboard() {
  const [showCreateMeetPopUp, setshowCreateMeetPopUp] = useState(false);
  function showCreateMeetPopUpBox() {
    setshowCreateMeetPopUp((e) => !e);
  }
  return (
    <div className="dashboardContainer">
      <div className="createMeetButtonContainer">
        <button className="createMeetButton" onClick={showCreateMeetPopUpBox}>
          Create Meet
        </button>
      </div>
      {showCreateMeetPopUp && (
        <div className="createMeetBlockContainer">
          <Close clickfunc={showCreateMeetPopUpBox} />
          <h> Create Meet</h>

          <form>
            <label className="HostNameLabel">Host Name</label>
            <input type="text" className="hostNameInput" name="hostName" />
            <button className="formCreateMeetSubmit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}
export default Dashboard;

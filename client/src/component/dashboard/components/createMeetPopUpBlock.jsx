import React from "react";
import Close from "../../../assets/svg/close";

export function ShowCreateMeetPopUp({ showCreateMeetPopUpBox }) {
  return (
    <div className="createMeetBlockContainer">
      <Close clickfunc={showCreateMeetPopUpBox} />
      <h> Create Meet</h>
      <form>
        <label className="HostNameLabel">Host Name</label>
        <input type="text" className="hostNameInput" name="hostName" />
        <button className="formCreateMeetSubmit">Submit</button>
      </form>
    </div>
  );
}

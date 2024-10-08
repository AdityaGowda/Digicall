import React from "react";
import Close from "../../../assets/svg/close";

export function ShowCreateMeetPopUp({
  showCreateMeetPopUpBox,
  useDetails,
  loginToken,
}) {
  const createMeetOnsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { title } = Object.fromEntries(formData);
    const hostname = useDetails.username;
    console.log(loginToken.digiLoginToken);
    const createMeet = fetch(`http://localhost:8000/api/createMeet`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "digiToken-x": loginToken.digiLoginToken,
      },

      body: JSON.stringify({ hostName: hostname, title: title }),
    });
    console.log(createMeet, "----------");
    if (createMeet.status == 200) {
      showCreateMeetPopUpBox();
    }
  };
  return (
    <div className="createMeetBlockContainer">
      <Close clickfunc={showCreateMeetPopUpBox} />
      <h> Create Meet</h>
      <form onSubmit={(e) => createMeetOnsubmit(e)}>
        <label className="HostNameLabel">Host Name</label>
        <input
          type="text"
          className="hostNameInput"
          name="hostName"
          // value={useDetails.username}
          // disabled
        />
        <label className="HostNameLabel">Meet Title</label>
        <input type="text" className="hostNameInput" name="title" required />
        <button type="submit" className="formCreateMeetSubmit">
          Submit
        </button>
      </form>
    </div>
  );
}

import React from "react";

function CreateMeetButton({ onclickFunc }) {
  
  return (
    <div className="createMeetButtonContainer">
      <button className="createMeetButton" onClick={onclickFunc}>
        Create Meet
      </button>
    </div>
  );
}

export default CreateMeetButton;

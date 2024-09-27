import React, { useState, useEffect } from "react";
import "./dashboard.css";
import Close from "../../assets/svg/close";
import CreateMeetButton from "./components/createMeetButton";
import { ShowCreateMeetPopUp } from "./components/createMeetPopUpBlock";
import UpcomingMeet from "../VedioConference/upcoming";

function Dashboard() {
  const [showCreateMeetPopUp, setshowCreateMeetPopUp] = useState(false);
  const [loginToken, setLoginToken] = useState({});
  function showCreateMeetPopUpBox() {
    setshowCreateMeetPopUp((e) => !e);
  }

  useEffect(() => {
    let loginData = localStorage.getItem("digiLoginKey");
    console.log(loginData);
    loginData = JSON.parse(loginData);
    setLoginToken(loginData);
  }, []);
  useEffect(() => {
    const verifyToken = () => {
      if (loginToken.digiLogin) {
        fetch("http://localhost:8000/api/verifyDigiLoginToken", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "digiToken-x": loginToken.digiLoginToken,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Server Response:", data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });

        console.log(loginToken);
      }
    };
    verifyToken();
  }, [loginToken]);

  return (
    <div className="dashboardContainer">
      <CreateMeetButton onclickFunc={showCreateMeetPopUpBox} />

      {showCreateMeetPopUp && (
        <>
          <div className="bgImg"></div>
          <ShowCreateMeetPopUp
            showCreateMeetPopUpBox={showCreateMeetPopUpBox}
          />
        </>
      )}
      <UpcomingMeet />
    </div>
  );
}
export default Dashboard;

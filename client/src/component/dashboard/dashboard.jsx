import React, { useState, useEffect } from "react";
import "./dashboard.css";
import Close from "../../assets/svg/close";
import CreateMeetButton from "./components/createMeetButton";
import { ShowCreateMeetPopUp } from "./components/createMeetPopUpBlock";
import UpcomingMeet from "../VedioConference/upcoming";

function Dashboard() {
  const [showCreateMeetPopUp, setshowCreateMeetPopUp] = useState(false);
  const [loginToken, setLoginToken] = useState({});
  const [userDetails, setUserDetails] = useState({});
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
            setUserDetails(data);
          })
          .catch((error) => {
            console.log("Error:", error);
          });
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
            useDetails={userDetails}
            loginToken={loginToken}
          />
        </>
      )}
      <UpcomingMeet />
    </div>
  );
}
export default Dashboard;

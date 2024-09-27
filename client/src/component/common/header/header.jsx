import React from "react";
import { useNavigate } from "react-router-dom";
import Notifications from "../notification/notification";
import LoginSvg from "../../../assets/svg/login";
import LogoSvg from "../../../assets/svg/logo";
import Login from "../../login/login";

function DigiHeader() {
  const navigate = useNavigate();
  const showLoginPopUp = () => {
    navigate("/login");
  };
  return (
    <div className="headerContainer">
      <div className="txt-align">
        <LogoSvg />
      </div>
      <div className="txt-align headerIcons">
        <Notifications
          width="10%"
          height="50%"
          color="#EEEEEE"
          className="notificationSvg"
        />
        <LoginSvg
          onClick={() => showLoginPopUp()}
          width="10%"
          height="50%"
          color="#EEEEEE"
          className="loginSvg"
        />
      </div>
    </div>
  );
}

export default DigiHeader;

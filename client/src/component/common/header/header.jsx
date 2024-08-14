import React from "react";
import Notifications from "../notification/notification";
import LoginSvg from "../../../assets/svg/login";
import LogoSvg from "../../../assets/svg/logo";

function DigiHeader() {
  return (
    <div className="headerContainer">
      <div className="txt-align">
        <LogoSvg />
      </div>
      <div className="txt-align">
        <LoginSvg
          width="10%"
          height="100%"
          color="#EEEEEE"
          className="loginSvg"
        />
        <Notifications
          width="14%"
          height="100%"
          color="#EEEEEE"
          className="notificationSvg"
        />
      </div>
    </div>
  );
}

export default DigiHeader;

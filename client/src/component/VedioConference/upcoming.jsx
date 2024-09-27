import React from "react";

const UpcomingMeet = () => {
  return (
    <div>
      <h className="Recent">Recent</h>
      <section className="upComingBody">
        <div className="upcomingContainer">
          <div className="upcomingSubContainer">
            <section className="upcominTopContainer">
              <div>
                <label className="upcomingHostLabel">Host : </label>
                <h className="upcomingHostNames">Kiran</h>
              </div>
              <div>
                <p>Upcoming</p>
              </div>
            </section>
            <section className="upcomingSecondSubContainer">
              <div className="upcomingInvites">
                <label>Invites</label>
                <p>Adithya, maonj</p>
              </div>
              <div className="upcomingJoinButton">
                <button>Join</button>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpcomingMeet;

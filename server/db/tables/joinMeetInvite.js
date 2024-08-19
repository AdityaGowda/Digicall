const db = require("../configDB");

const createMeetInviteTable = () => {
  const createTableQuery = `
CREATE TABLE IF NOT EXISTS meet_invites (
    meet_id INT,
    member_id INT,
    PRIMARY KEY (meet_id, member_id),
    FOREIGN KEY (meet_id) REFERENCES meet(id),
    FOREIGN KEY (member_id) REFERENCES member(id)
);
  `;

  db.query(createTableQuery, (err, results, fields) => {
    if (err) {
      console.error("Error creating  meet_Invite table:", err.stack);
      return;
    }
    console.log("meet_Invite Table created successfully.");
  });
};

module.exports = {
  createMeetInviteTable,
};

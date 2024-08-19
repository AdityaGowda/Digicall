const db = require("../configDB");

const createMeetTable = () => {
  const createTableQuery = `CREATE TABLE IF NOT EXISTS meet (
    id INT AUTO_INCREMENT PRIMARY KEY,
    hostName VARCHAR(255) NOT NULL,
    roomId VARCHAR(50) NOT NULL,
    status VARCHAR(50),
    member_id INT,
    FOREIGN KEY (member_id) REFERENCES member(id)
);
  `;

  db.query(createTableQuery, (err, results, fields) => {
    if (err) {
      console.error("Error creating Meet table:", err.stack);
      return;
    }
    console.log("Meet Table created successfully.");
  });
};

module.exports = {
  createMeetTable,
};

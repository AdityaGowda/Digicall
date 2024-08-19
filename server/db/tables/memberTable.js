const db = require("../configDB");

const createMemberTable = () => {
  const createTableQuery = `
   CREATE TABLE  IF NOT EXISTS member (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password  VARCHAR(255) NOT NULL,
    phonenumber VARCHAR(15) NULL,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
  `;

  db.query(createTableQuery, (err, results, fields) => {
    if (err) {
      console.error("Error creating table:", err.stack);
      return;
    }
    console.log("Member Table created successfully.");
  });
};

// Export the createTable function
module.exports = {
  createMemberTable,
};

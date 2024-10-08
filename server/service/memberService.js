const db = require("../db/configDB");

const getMemberIdByEmail = async (email) => {
  try {
    const query = "SELECT id,name FROM member WHERE email = ?";
    const [rows] = await db.promise().query(query, [email]);
    console.log(
      rows,
      "------------- await db.promise().query(query, [email]);"
    );
    if (rows.length > 0) {
      console.log(rows);
      return rows[0];
    } else {
      throw new Error("Member not found");
    }
  } catch (err) {
    console.error("Error querying member:", err);
    throw err;
  }
};

module.exports = {
  getMemberIdByEmail,
};

const db = require("../db/configDB");

exports.checkAccountAlreadyExist = (req, res, next) => {
  const { email } = req.body;
  const sql = `select email from member where email=? `;
  db.query(sql, [email], (err, results) => {
    if (err) {
      console.error(`Error querying database: `, err);
      return res.status(500).json({ error: "Internal server error" });
    }
    if (results.length > 0) {
      res.status(200).json({ results: [], accExists: true });
    } else {
      next();
    }
  });
};

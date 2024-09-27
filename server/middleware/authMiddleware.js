const db = require("../db/configDB");

exports.checkAccountAlreadyExist = (req, res, next) => {
  const { email } = req.body;
  const sql = `select email from member where email=? `;
  db.query(sql, [email], (err, results) => {
    if (err) {
      console.error(`Error querying database: `, err);
      return res.status(500).json({ error: "Internal server error" });
    }
    console.log("banthy");
    if (results.length > 0) {
      console.log("test");
      res.status(200).json({ results: [], accExists: true });
    } else {
      console.log("exits");
      next();
    }
  });
};

exports.checkAccountNotExist = (req, res, next) => {
  const { email } = req.body;
  const sql = `select email,password from member where email=? `;
  db.query(sql, [email], (err, results) => {
    if (err) {
      console.error(`Error querying database: `, err);
      return res.status(500).json({ error: "Internal server error" });
    }
    if (results.length > 0) {
      res.dbEncryptedPassword = results[0].password;
      next();
    } else {
      res.status(200).json({ results: [], accExists: false });
      res.end();
    }
  });
};

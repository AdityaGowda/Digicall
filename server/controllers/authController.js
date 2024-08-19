const db = require("../db/configDB");
const encrypt = require("bcrypt");
exports.login = async (req, res) => {
  const { email, password } = req.body;
  let encrytedPassword = Passwordencrypt(password);
  const sql = `select * from member where email=? ;`;

  db.query(sql, [email], (err, results) => {
    if (err) {
      console.error(`Error querying database: `, err);
      return res.status(500).json({ error: "Internal server error" });
    }
    console.log(encrypted, "---------");
    res.status(200).json({ results: results, accExists: false });
  });
};

exports.signUp = (req, res) => {
  console.log(req.body);
  const { name, email, password, phonenumber } = req.body;
  encrytedPassword = Passwordencrypt(password);
  const sql = `INSERT INTO member (name, email,password,phonenumber) VALUES (?,?,?,?);`;
  db.query(sql, [name, email, password, phonenumber], (err, results) => {
    if (err) {
      console.error(`Error querying database: `, err);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.status(200).json({ results: results, accExists: false });
  });
};

const Passwordencrypt = async (password) => {
  let encrytedPassword = await encrypt.hash(password, 12);
  return encrytedPassword;
};

const compareEncrypt = async (userPasswd, dbPasswd) => {
  let comparePassword = await encrypt.compare(userPasswd, dbPasswd);
  return comparePassword;
};

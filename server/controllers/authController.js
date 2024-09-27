const db = require("../db/configDB");
const jwt = require("jsonwebtoken");
const encrypt = require("bcrypt");

const jwtToken = (email) => {
  return jwt.sign({ email: email }, "Thunder-Drasyion", {
    expiresIn: "90d",
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  let encrytedPassword = await compareEncrypt(
    password,
    res.dbEncryptedPassword
  );
  const token = jwtToken(email);
  if (encrytedPassword) {
    console.log("password match");
    res.status(200).json({ results: [], accExists: true, token: token });
  } else {
    console.log("password didnt match");
    res.status(200).json({ results: [], accExists: true });
  }
};

exports.signUp = async (req, res) => {
  const { name, email, password } = req.body;
  let encrytedPassword = await PasswordEncrypt(password);
  const token = jwtToken(email);
  const sql = `INSERT INTO member (name, email,password) VALUES (?,?,?)`;
  db.query(sql, [name, email, encrytedPassword], (err, results) => {
    if (err) {
      console.error(`Error querying database: `, err);
      return res.status(500).json({ error: "Internal server error" });
    }
    console.log("sign up done");
    res.status(200).json({ results: results, accExists: false, token: token });
  });
};

// PASSWORD ENCRYPT
const PasswordEncrypt = async (password) => {
  let encrytedPassword = await encrypt.hash(password, 12);
  return encrytedPassword;
};
// COMPARE AND WILL CHECK PASSWORD MATCH
const compareEncrypt = async (userPasswd, dbPasswd) => {
  let comparePassword = await encrypt.compare(userPasswd, dbPasswd);
  return comparePassword;
};

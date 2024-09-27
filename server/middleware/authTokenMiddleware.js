const jwt = require("jsonwebtoken");
const { getMemberIdByEmail } = require("../service/memberService");

exports.checkAuthToken = async (req, res, next) => {
  try {
    let token = req.headers["digitoken-x"];

    if (!token) {
      return res
        .status(401)
        .json({ status: 401, message: "No token provided" });
    }

    jwt.verify(token, "Thunder-Drasyion", async (err, decoded) => {
      if (err) {
        return res
          .status(401)
          .json({ status: 401, message: "Token not verified" });
      }

      if (decoded) {
        console.log(decoded);
        try {
          const memberId = await getMemberIdByEmail(decoded.email);
          req.email = decoded.email;
          console.log(memberId);
          req.memberId = memberId;
          next();
        } catch (error) {
          return res
            .status(404)
            .json({ status: 404, message: "Member not found" });
        }
      }
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, message: "Internal Server Error" });
  }
};

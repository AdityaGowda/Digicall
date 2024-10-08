const db = require("../db/configDB");

const createInstantMeet = async (req, res) => {
  const { hostName, title } = req.body;
  let roomId = await createRoomId(req.email + 1);
  console.log(roomId);
};

const createRoomId = async (roomName) => {
  try {
    const response = await fetch("https://api.100ms.live/v2/rooms", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3Mjc0NjY1OTUsImV4cCI6MTcyODA3MTM5NSwianRpIjoiNjBiYTQ2YTYtZGQxZi00MmJmLTlkMzktOGZjYWRmNmJmYmQ3IiwidHlwZSI6Im1hbmFnZW1lbnQiLCJ2ZXJzaW9uIjoyLCJuYmYiOjE3Mjc0NjY1OTUsImFjY2Vzc19rZXkiOiI2NmI5MDNhNDMzY2U3NGFiOWJlOTM5ODQifQ.ReWTrFPPbIWdIXunIpqhBPwA_VTzKXV-Syv9v9LX-yk",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: roomName,
        description: "This is a sample description for the room",
      }),
    });
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      const roomCode = await createRoomCode(data.id);
      return roomCode;
    } else {
      throw new Error(`Error: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error creating room:", error.message);
  }
};

const createRoomCode = async (roomId) => {
  try {
    const response = await fetch(
      "https://api.100ms.live/v2/room-codes/room/" + roomId,
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3Mjc0NjY1OTUsImV4cCI6MTcyODA3MTM5NSwianRpIjoiNjBiYTQ2YTYtZGQxZi00MmJmLTlkMzktOGZjYWRmNmJmYmQ3IiwidHlwZSI6Im1hbmFnZW1lbnQiLCJ2ZXJzaW9uIjoyLCJuYmYiOjE3Mjc0NjY1OTUsImFjY2Vzc19rZXkiOiI2NmI5MDNhNDMzY2U3NGFiOWJlOTM5ODQifQ.ReWTrFPPbIWdIXunIpqhBPwA_VTzKXV-Syv9v9LX-yk",
          "Content-Type": "application/json",
        },
      }
    );
    const roomCodeData = await response.json();
    return roomCodeData;
  } catch (e) {
    console.error("Error creating room code:", e.message);
  }
};

const dbInsert = async (roomCodeData, hostName, title, memberId, res) => {
  const meetHostDetail = roomCodeData.data[0];
  const guestHostDetail = roomCodeData.data[1];
  console.log(roomCodeData.data[0]);
  let sql1 =
    "insert into meet (hostname,title,roomId,status,member_id,roomCode,role) values (?,?,?,?,?,?,?);";
  console.log(
    hostName,
    title,
    meetHostDetail.room_id,
    meetHostDetail.enabled,
    memberId,
    meetHostDetail.code,
    meetHostDetail.role
  );
  db.query(
    sql1,
    [
      hostName,
      title,
      meetHostDetail.room_id,
      meetHostDetail.enabled,
      memberId,
      meetHostDetail.code,
      meetHostDetail.role,
    ],
    (err, results) => {
      if (err) {
        console.error(`Error querying database: `, err);
        return res.status(500).json({ error: "Internal server error" });
      }

      let sql2 =
        "insert into meet_guest (guestRoomId,guestRoomCode) values (?,?);";
      db.query(
        sql2,
        [guestHostDetail.room_id, guestHostDetail.code],
        (err, results) => {
          if (err) {
            console.error(`Error querying database: `, err);
            return res.status(500).json({ error: "Internal server error" });
          }
          return res.status(200).json({ message: "meet created" });
        }
      );
    }
  );
};
module.exports = { createInstantMeet };

const createInstantMeet = async (req, res) => {
  // roomid and roomcode
  let roomId = await createRoomId("Host-Kiran");
  res.json(roomId);
};

const createRoomId = async (roomName) => {
  try {
    const response = await fetch("https://api.100ms.live/v2/rooms", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MjM4MTU0MDUsImV4cCI6MTcyNDQyMDIwNSwianRpIjoiNjU5YTFkYTctYTUxNC00ODgyLWI5MTYtMTc5Y2QxYTZjNzcyIiwidHlwZSI6Im1hbmFnZW1lbnQiLCJ2ZXJzaW9uIjoyLCJuYmYiOjE3MjM4MTU0MDUsImFjY2Vzc19rZXkiOiI2NmI5MDNhNDMzY2U3NGFiOWJlOTM5ODQifQ.fVnQx7YGZl5VZp4WWLn4A13Q2ydaJ-fNb0_XOT_Wb78",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: roomName,
        description: "This is a sample description for the room",
      }),
    });

    if (response.ok) {
      const data = await response.json();
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
            "Bearer  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MjM4MTU0MDUsImV4cCI6MTcyNDQyMDIwNSwianRpIjoiNjU5YTFkYTctYTUxNC00ODgyLWI5MTYtMTc5Y2QxYTZjNzcyIiwidHlwZSI6Im1hbmFnZW1lbnQiLCJ2ZXJzaW9uIjoyLCJuYmYiOjE3MjM4MTU0MDUsImFjY2Vzc19rZXkiOiI2NmI5MDNhNDMzY2U3NGFiOWJlOTM5ODQifQ.fVnQx7YGZl5VZp4WWLn4A13Q2ydaJ-fNb0_XOT_Wb78",
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

module.exports = { createInstantMeet };

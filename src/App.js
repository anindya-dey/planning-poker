import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { v4 as uuid } from "uuid";

import Login from "./components/Login";
import NewRoom from "./components/NewRoom";
import Room from "./components/Room";

function App() {
  const [roomSessionId, setRoomSessionId] = useState();

  return (
    <>
      <Routes>
        <Route path="/" element={<Login onCreateRoom={() => setRoomSessionId(uuid())} onJoinRoom={() => console.log("Joined!!!!")} />} />
        <Route path="/room" element={<NewRoom />} />
        <Route path="/room/:roomSessionId" element={<Room roomSessionId={roomSessionId} />} />
      </Routes>
    </>
  );
}

export default App;

import { useState } from "react";
import { v4 as uuid } from "uuid";

import Login from "./components/Login";

function App() {
  const [ roomSessionId, setRoomSessionId ] = useState();

  return (
    <>
      <div>{ roomSessionId }</div>
      <Login onCreateRoom={() => setRoomSessionId(uuid())} onJoinRoom={() => console.log("Joined!!!!")}/>
    </>
  );
}

export default App;

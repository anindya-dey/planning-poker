import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import NewRoom from "./components/NewRoom";
import Room from "./components/Room";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomId" element={<Room />} />
        <Route path="/room/new" element={<NewRoom />} />
      </Routes>
    </>
  );
}

export default App;

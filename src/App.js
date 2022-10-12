import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import NewRoom from "./components/NewRoom";
import NotFound from "./components/NotFound";
import Room from "./components/Room";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/room">
          <Route path=":roomId" element={<Room />} />
          <Route path="new" element={<NewRoom />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

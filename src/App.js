import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import NewRoom from "./components/NewRoom";
import NotFound from "./components/NotFound";
import Room from "./components/Room";
import RoomNotFound from "./components/RoomNotFound";
import Layout from "./components/Layout";

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/room">
            <Route path="" element={<RoomNotFound />} />
            <Route path=":roomId" element={<Room />} />
            <Route path="new" element={<NewRoom />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;

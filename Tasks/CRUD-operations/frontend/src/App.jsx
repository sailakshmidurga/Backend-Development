import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./AddUser";
import Users from "./Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddUser />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Editor from "./pages/Editor";
import Allvideo from "./pages/Allvideo";
import Record from "./pages/Record";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/allvideo" element={<Allvideo />}/>
        <Route path="/record" element={<Record/>} />
      </Routes>
    </>
  );
}

export default App;

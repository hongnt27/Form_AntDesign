import "./App.css";
import { Routes, Route } from "react-router-dom";
import UseForm from "../src/useFrom/UseForm";
import Login from "./login/Login";

function App() {
  console.log("ok");

  return (
    <div
      className="App"
      style={{
        margin: "50px auto",
        padding: "20px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "30%",
        height: "500px",
        border: "1px solid black",
        borderRadius: "5px",
      }}
    >
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/useform" element={<UseForm />} />
      </Routes>
    </div>
  );
}

export default App;

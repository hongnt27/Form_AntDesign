import "./App.css";
import Login from "./components/Login";


function App() {
  console.log("ok");

  return (
    <div
      className="App"
      style={{
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "50%",
      }}
    >
      <Login />
    </div>
  );
}

export default App;

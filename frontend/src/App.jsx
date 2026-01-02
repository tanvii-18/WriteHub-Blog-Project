import "./index.css";
// import api from "./api/api.js";
import { useEffect } from "react";
import Home from "./screens/Home.jsx";

function App() {
  // useEffect(() => {
  //   api.get("/blogs").then((res) => console.log(res.data));
  // }, []);

  return (
    <>
      <Home />
    </>
  );
}

export default App;

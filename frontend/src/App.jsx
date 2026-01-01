import "./index.css";
import api from "./api/api.js";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    api.get("/blogs").then((res) => console.log(res.data));
  }, []);
  return (
    <>
      <h1>WriteHub - Blogs</h1>
    </>
  );
}

export default App;

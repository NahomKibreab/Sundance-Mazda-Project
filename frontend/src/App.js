import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("/db").then((res) => {
      setData(res.data);
    });
  }, []);

  const names = data && data.map((d) => <div key={d.id}>{d.name}</div>);
  return <div className="App">{names}</div>;
}

export default App;

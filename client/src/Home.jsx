import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/user")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Crud app</h2>
      {data.map((item) => (
        <p key={item.id}>
          {item.name} {item.age}
        </p>
      ))}
    </div>
  );
}

export default Home;

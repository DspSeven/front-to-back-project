import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  const [msg, setMsg] = useState("");

  const submitForm = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:3000", {
        msg,
      })
      .then((res)=> {
        console.log(res)
      }
        )
      .catch((e)=> {
        console.log(e)
      })
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form action="POST">
      <textarea
        name="text"
        onChange={(e) => {
          setMsg(e.target.value)
        }}
        placeholder="enter the text"
      />
      <br />
      <input type="submit" onClick={submitForm} value="Submit"/>
    </form>
  );
};
export default Home;

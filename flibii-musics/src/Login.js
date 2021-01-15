import React from "react";
import "./Login.css";
import { accessUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img className="header_logo" src={"/flibii_logo.png"} 
        alt="Flibii Books Logo"/>
      <a href={accessUrl}>LOGIN TO Flibii Musics</a>
    </div>
  );
}

export default Login;

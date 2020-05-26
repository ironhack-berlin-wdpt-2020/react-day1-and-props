import React from "react";
import ReactPlayer from "react-player";

function User(props) {
  return (
    <div>
      <h2>Hello, {props.firstName} {props.lastName}!</h2>
      <ReactPlayer volume={0.5} url="https://vimeo.com/channels/top/22439234" ></ReactPlayer>
    </div>
  );
}

export default User;
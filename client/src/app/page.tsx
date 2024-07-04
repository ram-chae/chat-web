"use client";

import Link from "next/link";
import { useState } from "react";

// import "./Join.css";

function Join() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div
      className="joinOuterContainer"
      style={{ display: "flex", flex: 1, background: "#fff", height: "100vh" }}
    >
      <div className="joinInnerContainer">
        <h1 className="heading"></h1>
        <div>
          <input
            placeholder="이름"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="채팅방"
            className="joinInput mt-20"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          href={`/chat?name=${name}&room=${room}`}
        >
          <button className={"button mt-20"} type="submit">
            가입
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Join;
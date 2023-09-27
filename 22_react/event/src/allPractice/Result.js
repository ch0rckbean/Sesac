import { useState } from "react";

function Result(props) {
  const { img, color, bgColor, text } = props;
  console.log(props);

  return (
    <div style={{ display: "block" }}>
      <img src="/allPractice/{img}.png" width={100} height={100} />

      <div
        style={{
          padding: "10px",
          marginTop: "10px",
          backgroundColor: { bgColor },
          color: { color },
        }}
      >
        {text}
      </div>
    </div>
  );
}

export default Result;

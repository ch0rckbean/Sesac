import { useState } from "react";

export default function Event_ex2() {
  const [id, setId] = useState("");
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");

  return (
    <>
      작성자: <input type="text" placeholder="작성자" />
      제목: <input type="text" />
      <button>작성</button>
      <br></br>
      <select>
        <option>작성자</option>
        <option>제목</option>
        <input type="text" placeholder="검색어"></input>
      </select>
      <button>검색</button>
      <br></br>
      <table style={{ width: "400px" }}>
        <tr>
          <th style={{ border: "1px solid black", borderCollapse: "collapse" }}>
            번호
          </th>
          <th style={{ border: "1px solid black", borderCollapse: "collapse" }}>
            제목
          </th>
          <th style={{ border: "1px solid black", borderCollapse: "collapse" }}>
            작성자
          </th>
        </tr>
        <tr>
          <td>1</td>
          <td>w</td>
          <td>d</td>
        </tr>
      </table>
    </>
  );
}

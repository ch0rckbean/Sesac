import { useState } from "react";

export default function Event_ex2() {
  // 표에 추가할 값
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");

  // 입력 값
  const [inputTitle, setInputTitle] = useState("");
  const [inputWriter, setInputWriter] = useState("");
  const [inputSearch, setInputSearch] = useState("");

  // 입력값에 따른 변경
  const titleChange = (e) => {
    setInputTitle(e.target.value);
  };
  const writerChange = (e) => {
    setInputWriter(e.target.value);
  };
  const searchChange = (e) => {
    setInputSearch(e.target.value);
  };

  return (
    <>
      작성자: <input type="text" placeholder="작성자" onChange={writerChange} />
      제목: <input type="text" onChange={titleChange} />
      <button>작성</button>
      <br></br>
      <select>
        <option>작성자</option>
        <option>제목</option>
        <input type="text" placeholder="검색어" onChange={searchChange}></input>
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

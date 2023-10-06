import { useState, useRef } from "react";

export default function Event_ex2() {
  // useref 객체 생성
  const myRefWriter = useRef();
  const myRefTitle = useRef();
  const myRefSearch = useRef();

  //초기 리스트
  const [list, setList] = useState([]);

  // 입력 값
  const [inputTitle, setInputTitle] = useState("");
  const [inputWriter, setInputWriter] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [scType, setScType] = useState("작성자"); //초기값 설정 해놔야 onchange 안 일어났을 때도 검색 이벤트 가능

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

  // 함수
  const handleRefWriter = () => {
    myRefWriter.current.focus();
  };
  const handleRefTitle = () => {
    myRefTitle.current.focus();
  };
  const handleKeyDownSearch = (e) => {
    if (e.nativeEvent.isComposing) {
      return;
    }
    console.log(e.nativeEvent);
    if (e.code === "Enter") {
      search();
    }
  };
  const handleKeyDownWrite = (e) => {
    if (e.nativeEvent.isComposing) {
      return;
    }
    if (e.code === "Enter") {
      addList();
    }
  };

  const addList = () => {
    if (inputWriter.trim().length < 1) {
      handleRefWriter();
      return;
    }
    if (inputTitle.trim().length < 1) {
      handleRefTitle();
      return;
    }
    const newList = {
      id: list.length + 1,
      title: inputTitle,
      writer: inputWriter,
    };
    setList([...list, newList]); //꼭 배열 형태로 만들기!!!!
    setInputTitle("");
    setInputWriter("");
  };

  const search = () => {
    console.log("scType", scType);
    if (inputSearch.trim().length < 1) {
      myRefSearch.current.focus();
      return;
    }
    if (scType === "작성자") {
      const searchedWriter = list.filter((list) =>
        list.writer.includes(inputSearch)
      );
      if (searchedWriter.length < 1) {
        alert("검색 결과가 없습니다.");
      } else {
        setList(searchedWriter);
        console.log(list.length);
        setInputSearch("");
      }
    } else if (scType === "제목") {
      const searchedTitle = list.filter((list) =>
        list.title.includes(inputSearch)
      );
      if (searchedTitle.length < 1) {
        alert("검색 결과가 없습니다.");
      } else {
        setList(searchedTitle);
        setInputSearch("");
      }
    }
  };
  return (
    <>
      작성자:{" "}
      <input
        type="text"
        placeholder="작성자"
        onChange={writerChange}
        value={inputWriter}
        ref={myRefWriter}
      />
      제목:{" "}
      <input
        type="text"
        onChange={titleChange}
        value={inputTitle}
        ref={myRefTitle}
        onKeyDown={(e) => handleKeyDownWrite(e)}
      />
      <button onClick={addList} type="button">
        작성
      </button>
      <br></br>
      <br></br>
      <select onChange={(e) => setScType(e.target.value)}>
        <option value="작성자">작성자</option>
        <option value="제목">제목</option>
      </select>
      <input
        type="text"
        placeholder="검색어"
        value={inputSearch}
        onChange={searchChange}
        ref={myRefSearch}
        onKeyDown={(e) => handleKeyDownSearch(e)}
      ></input>
      <button onClick={search} type="button">
        검색
      </button>
      <br></br>
      <br></br>
      <table style={{ width: "400px" }}>
        <thead>
          <tr>
            <th
              style={{ border: "1px solid black", borderCollapse: "collapse" }}
            >
              번호
            </th>
            <th
              style={{ border: "1px solid black", borderCollapse: "collapse" }}
            >
              제목
            </th>
            <th
              style={{ border: "1px solid black", borderCollapse: "collapse" }}
            >
              작성자
            </th>
          </tr>
        </thead>
        <tbody>
          {list.map((val) => {
            return (
              <tr key={val.id}>
                <td>{val.id}</td>
                <td>{val.title}</td>
                <td>{val.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

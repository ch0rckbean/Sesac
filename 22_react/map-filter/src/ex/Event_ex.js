import { useState } from "react";

export default function Event_ex() {
  const [list, setList] = useState([
    {
      id: 1,
      name: "코디",
      email: "codi@gmail.com",
    },
    {
      id: 2,
      name: "윤소희",
      email: "yoonsohee@gmail.com",
    },
  ]);

  const [inputName, setinputName] = useState("");
  const [inputEmail, setinputEmail] = useState("");
  const handlechangeName = (e) => {
    setinputName(e.target.value);
  };
  const handlechangeEmail = (e) => {
    setinputEmail(e.target.value);
  };
  const deleteList = (targetId) => {
    const newList = list.filter((name) => name.id !== targetId);
    setList(newList);
  };
  //   console.log(inputName);
  //   console.log(inputEmail);
  const register = () => {
    const newList = list.concat({
      id: list.length + 1,
      name: inputName,
      email: inputEmail,
    });
    setList(newList);
    setinputName("");
    setinputEmail("");
    console.log("nL", newList);
  };
  const handleKeyDown = (e) => {
    if (e.code === "Enter") {
      register();
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="이름"
        id="name"
        value={inputName}
        onChange={(e) => handlechangeName(e)}
      />
      <input
        type="text"
        placeholder="이메일"
        id="email"
        value={inputEmail}
        onChange={(e) => handlechangeEmail(e)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <button onClick={register}>등록</button>
      {list.map((value) => {
        return (
          <ol key={value.id} onDoubleClick={() => deleteList(value.id)}>
            {value.name} : {value.email}
          </ol>
        );
      })}
    </>
  );
}

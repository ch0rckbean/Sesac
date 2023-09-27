import React, { Component } from "react";

class ClassBind extends Component {
  constructor(props) {
    super(props);

    console.log("constructor this", this);
    this.state = {
      name: "haribo",
    };

    // 1. 클래스 컴포넌트에서 이벤트 사용 - bind 쓰기
    //  - JS : this 호출 방법에 의해 결정
    //    => 함수 호출될 때마다 this 다를 수 있음
    // bind() 메서드는 호출 방법과 무관하게 this 묶어버림

    // 1) bind 사용 경우
    this.printConsole = this.printConsole.bind(this);
  }
  printConsole() {
    console.log("this", this);
    console.log("this.state", this.state);
  }

  // 2. 클래스 컴포넌트에서 이벤트 사용 - 화살표 함수 사용
  //    - 화살표 함수는 this가 없음 => 선언 시점에 상위 스코프가 this로 바인딩
  //   printConsole = () => {
  //     console.log("this", this);
  //   };

  printConsole2 = (msg) => {
    console.log(msg);
  };
  render() {
    return (
      <div>
        <h1>Class Component Event</h1>
        <button onClick={this.printConsole}>printConsole(인자 X)</button>
        <button onClick={() => this.printConsole2("msg")}>
          printConsole(인자 O)
        </button>
        <button onClick={this.printConsole2.bind(null, "msg/bind")}>
          printConsole(인자 O, bind)
        </button>
      </div>
    );
  }
}

export default ClassBind;

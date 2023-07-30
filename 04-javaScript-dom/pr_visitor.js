let num = 3; //초기 3명이 썼으니까
const visitor = document.getElementById("visitor");
const content = document.getElementById("content");
const post = document.getElementById("post");
const tb = document.getElementById("tb");

post.addEventListener("click", Post);
function Post() {
  num += 1;
  let year = new Date().getFullYear();
  let month = new Date().getMonth();
  let date = new Date().getDate();
  let hour = new Date().getHours();
  let min = new Date().getMinutes();
  let time = `${year}-${month}-${date} ${hour} : ${min}`;

  addText = `<tr><td>${num}</td><td>${visitor.value}</td><td>${content.value}</td><td>${time}</td></tr>`;
  tb.innerHTML += addText;
  visitor.value = "";
  content.value = "";
}

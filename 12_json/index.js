//JSON
const car = `{
    "model": "IONIQ 5",
    "company": "HYUNDAI",
    "price": 50000000,
    "year": 2023,
    "isElectricCar": true,
    "options": ["side mirror", "smart sensor", "built-in cam" ]
}`;

//JSON.parse(): json => js obj //역직렬화
console.log(car); //json
const obj = JSON.parse(car);
console.log(obj); //js obj

//obj는 js obj이므로 .[] 연산자 이용해서 키 값에 접근 가능
console.log(obj.price);
console.log(obj.model);

//JSON.stringify(): js obj => json //직렬화
const json = JSON.stringify(obj);
console.log(json); //format: json

//json 변수는 JSON 형태의 문자열이므로 .[]연산자 이용해 키 값에 접근 불가능
console.log(json.model); //undefined

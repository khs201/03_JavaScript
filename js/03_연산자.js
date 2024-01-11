// 변수 선언

// document(문서) : HTML문서(파일) 내에서
// get : 얻다
// Element : HTML 요소
// ById : 아이디가 일치하는


// -> HTML 문서 내에서 아이디가 일치하는 요소를 얻어오겠다

const number1 = document.getElementById("input1");
const number2 = document.getElementById("input2");
const result = document.getElementById("calcResult");

/* 두 수를 더해서 화면에 출력하는 함수(기능) */
function plusFn(){

    // input요소.value : input 요소에 작성된 값 얻어오기
    const value1 = number1.value;
    const value2 = number2.value;

    console.log(value1, value2);

    console.log("두 수의 합 : ", value1 + value2);
    // input 요소에 작성된 값은 무조건 문자열(string) 형태라서
    // 더했을 때 이어쓰기 되는 문제가 발생한다!!!

    // [해결방법]
    // 문자열 (string)을 숫자(number)로 변경하는 코드를 수행
    // -> 데이터 파싱(data parsing) : 데이터의 종류를 바꿈
}
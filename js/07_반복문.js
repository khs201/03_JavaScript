function check1() {

    // for([1]초기식 ; [2]조건식 ; [4]증감식){
    //   [3]조건식이 true인 경우 반복 수행할 코드;
    // }

    let result = ""; // 빈 문자열
    for (let num = 1; num <= 5; num++) {

        result += num; // 복합 대입 연산자 
        // result = reuslt + num;
    }

    // result = "12345";
    console.log("result : ", result);

}

//   12345 출력

function check2() {
    // 1 부터 10까지 출력하기

    for (let num = 1; num <= 10; num++) {
        console.log("num : ", num);

    }
}

//  1부터 20까지 1씩 증가하며 출력 
function check3() {
    for (let num = 1; num <= 20; num++) {
        console.log("num : ", num);
    }
}
// 5부터 15까지 1씩 증가하며 출력
function check4() {
    for (let num = 5; num <= 15; num++) {
        console.log("num : ", num);
    }
}

// <!-- 1부터 30까지 2씩 증가하며 출력 -->
function check5() {
    for (let num = 1; num <= 30; num += 2) {
        console.log("num : ", num);
    }
}

// 1부터 10까지 모든 정수의 합
function check6() {

    let sum = 0; // 합계를 저장하기 위한 변수
    // 0을 대입한 이유 : 0은 더해도 아무런 영향이 없기 때문에

    for (let num = 1; num <= 10; num++) { // num 1 ~ 10 변함
        sum += num; // sum에 num 값(1~10) 누적
    }
    console.log("sum :", sum);
}

// 입력 받은 범위 내 모든 정수의 합 구하기

function sumFn() {
    // input에 작성된 값을 얻어와 저장
    const start = Number(document.getElementById("inputNumber1-1").value); // 값을 바로 얻어오는 .value
    const end = Number(document.getElementById("inputNumber1-2").value);

    // 결과를 출력하기 위한 요소(span#result1)인 요소 얻어와 저장
    const result1 = document.getElementById("result1");

    let sum = 0; // 합계를 저장할 변수, 0으로 해야 더하든 빼든 영향이 없음

    // start 부터 end 까지 1씩 증가하는 for문
    for (let num = start; num <= end; num++) {
        sum += num; // num 값을 sum에 누적
    }
    result1.innerText = sum;
}


// 입력 받은 범위 내에서 증감식만큼 증가하며 모든 정수 출력하기
function executeFn2() {
    const start = Number(document.getElementById("inputNumber2-1").value);
    const end = Number(document.getElementById("inputNumber2-2").value);
    // 증가값
    const val = Number(document.getElementById("inputNumber2-3").value);
    // 결과 출력할 ul 요소
    const ul = document.getElementById("result2");

    ul.innerHTML = ""; // 이전 ul에 작성된 내용을 모두 삭제

    // start 부터 end까지 val 씩 증가
    for (let num = start; num <= end; num += val) {

        // ul 요소 내부에 li 요소를 누적 시키는 +=
        ul.innerHTML += `<li>${num}</li>`;

    }

}

// 요소.innertext = "문자열";
// -> 요소의 내용으로 문자열을 대입
// HTML 태그를 해석하지 않고 그대로 보여줌

// 요소.innerHTML = "<h2>문자열</h2>"
// -> 요소의 내용으로 문자열을 대입
// (HTML 태그를 해석해서 화면에 출력)


// 구구단 2단 출력하기
function check7() {
    // 곱해지는 수(num)이 1부터 9까지 1씩 증가
    for (let num = 1; num <= 9; num++) {
        console.log(`2 x ${num} = ${2 * num}`);
    }
}

// 원하는 단 출력하기
function executeFn3() {
    // 곱해지는 수(num)이 1부터 9까지 1씩 증가
    const val = Number(document.getElementById("input3").value);
    const ul = document.getElementById("result3");
    ul.innerHTML = ""; // 이전내용 삭제

    // 입력 받은 단이 2 ~ 9 사이가 아닐 경우
    // "2~9 사이만 입력해 주세요" 알림창 띄우기

    // if( !(val >= 2 && input <= 9) ){
    if (val < 2 || val > 9) {
        alert("2~9 사이만 입력해 주세요");

        return; // 함수를 종료하고 호출한 곳으로 돌아감, 지금은 함수 종료 정도로만 인식
        // 조건식이 true 인 경우 수행
    }

    for (let num = 1; num <= 9; num++) {
        ul.innerHTML += `<li>${val} x ${num} = ${val * num}</li>`;
        console.log(`${val} x ${num} = ${val * num}`);
    }

}


function executeFn4() {

    // 배수
    const input = Number(document.getElementById("input4").value);

    // 모양
    const output = document.getElementById("output4").value;

    // 출력할 div
    const result = document.getElementById("result4");

    // 출력할 문자열을 저장할 변수
    let str = "";

    for (let x = 1; x <= 50; x++) {

        if (x % input == 0) { // x가 input의 배수인 경우
            // str에 x 대신 output 을 대입
            str += output + " ";

        } else {
            str += x + " ";
        }

        // 10의 배수 마다 str에 <br> 태그 추가
        if (x % 10 == 0) {
            str += "<br>";
        }


    }

    result.innerHTML = str;
}

//  다음 모양 출력하기
//     12345
//     12345
//     12345
//     12345
function check8() {

    // 4바퀴 반복하는 for문
    for (let y = 1; y <= 4; y++) {
        // "12345" 출력하는 for문
        let str = "";
        for (let x = 1; x <= 5; x++) {
            str += x;
        }
        console.log(str);

    }



}

/* 다음 모양 출력하기
    1
    12
    123
    1234
    12345
*/
function check9() {

    for (let y=1 ; y <= 5 ; y++) {



        let str = "";
        for (let x = 1; x <= y; x++) {
            str += x;
        }
        console.log(str);
    }
}


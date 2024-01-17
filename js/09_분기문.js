// break 확인
function check1() {
    // 1씩 1부터 10까지 증가하다 5가 되면 멈추게 만들어본다
    for (let i = 1; i <= 10; i++) {

        console.log("i : ", i);

        if (i == 5) break; // 반복문 멈춤
    }
}

// 무한 반복하는 while문 멈추기

function check2() {
    let i = 1;
    while (true) {
        // true일 때 반복 수행하는 것이 while 안쪽 코드
        console.log("i : ", i++);

        if (i > 10) break; // 10 초과 시 멈춤
    }
}

// continue 확인하기
function check3() {
    // 1부터 20까지 출력. 단, 3의 배수는 건너뛰기
    for (let i = 1; i <= 20; i++) {
        if (i % 3 == 0) continue;
        console.log("i : ", i);
    }

}

// 1부터 30까지 1씩 증가하며 출력
// 단, 홀수 또는 10의 배수는 건너뛰기
function check4() {
    for (let i = 1; i <= 30; i++) {
        if (i % 2 == 1 || i % 10 == 0) continue;
        console.log("i : ", i);
    }
}


// 0123456789
// 0123456789
// 0123456789
// 0123456789
// 0123456789
// 0~9까지 5줄 출력
// - 각 줄에서 4의 배수는 건너뛰기
// - 3번째 줄 출력 후 멈추기
function check5() {
    for (let row = 1; row <= 5; row++) {
        let str = "";
        for (let col = 0; col <= 9; col++) {
            // 0을 제외한 4의 배수인 경우
            if (col != 0 && col % 4 == 0) continue;
            str += col;

        }
        console.log(str);
        // 3번째 줄 출력 후 멈춤
        if (row == 3) break;
    }
}

//  ---------------------------- 업다운게임

function startGame() {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // 1~100 사이 난수
    let count = 0; // 숫자를 입력한 횟수 (정답 시도 횟수)
    let str = "1 ~ 100 사이 숫자를 입력해주세요"; // prompt에 작성되어질 문자열

    while (true) { // 무한 반복

        // prompt를 이용해서 값 입력 받기
        // -> 확인 : 입력한 값, 취소 : null
        let input = prompt(str);


        // 취소를 누른 경우 -> "게임 포기" 알림을 띄운 뒤 반복 종료 ***
        if (input == null) {
            alert("포기")
            break;}
        // 확인을 누른 경우 숫자로 변환 
        // NaN : Not a Number "숫자가 아니다"를 나타내는 값
        input = Number(input);
        // input에는 입력한 숫자 또는(||) NaN이 대입됨

        // NaN인 경우 다시 입력 받도록 하기
        // -> isNaN(변수/값) : 변수/값이 NaN이면 true, 아니면 false 반환
        if (isNaN(input)) {
            alert("숫자만 입력해 주세요");
            continue;
        } else if (input <= 0 || input >= 101) {
            alert("1 ~ 100까지의 숫자를 입력해주세요")
        }

        // console.log("입력 값 : ", input); break; 확인용***************

        ////////////////////////////// 이하 잘 입력한 경우(숫자 입력)

        // 정답 시도 횟수를 1 증가 ***
        count++
        

        // 입력한 값이 난수와 같다면 ****
        // "정답!! (입력한 값) / count : 정답횟수 알림창 출력 후" ****
        // 알림창 출력 후 반복 종료 ********
        if (input == randomNumber) {
            alert(`정답!! ${input} / 시도 횟수 : ${count}`);
            break;
            
        }



        // 입력한 값이 난수보다 큰 경우 ****
        // "[DOWN]" / count : 정답시도횟수 ***
        // 문자열을 str에 대입 후 다음 반복으로 이동
        if (input > randomNumber) alert(`[DOWN] / 시도 횟수 : ${count}`);
        

        // 입력한 값이 난수보다 작은 경우
        // "[UP] / count : 정답시도횟수"
        // 문자열을 str에 대입 후 다음 반복으로 이동
        else (input < randomNumber) 
            alert(`[UP] / 시도횟수 : ${count}`);
        }

    }


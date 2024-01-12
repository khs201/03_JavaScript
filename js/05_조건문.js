/* if - 양수인지 검사 */
const input1 = document.getElementById("input1");

function check1() {

    const value = Number(input1.value); // 입력 받은 값

    if (value > 0) { // value가 0보다 커서 true인 경우
        alert("양수 입니다.");

    }

    if (value <= 0) { // value가 0 보다 같거나 작아서 true 인 경우
        // -> value가 양수가 아닌 경우
        alert("양수가 아닙니다");

    }

}

/* if - else -> 홀/짝 판별하기 */
function check2() {

    // 난수 발생 : Math.random()
    // 난수 범위 : 0 <= Math.random() < 1

    const randomNumber = Math.floor(Math.random() * 101);

    if(randomNumber % 2 == 1){ // 홀수
        alert(`${randomNumber} 는 홀수 입니다.`);
    }

    else{ // 홀수가 아닌 경우 == 짝수
        alert(`${randomNumber} 는 짝수 입니다.`);

    }

}
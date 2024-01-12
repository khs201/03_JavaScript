// prompt 사용 연습

function test() {

    const password = prompt("비밀번호를 입력하세요");

    // 확인 -> 입력한 문자열
    // 취소 -> null

    if (password == null) { // 취소
        alert("취소");
    } else { // 확인

        // 입력한 비밀번호가 '1234'가 맞는지 확인
        if (password == '1234') {
            alert("비밀번호 일치");
        } else {
            alert("비밀번호가 일치하지 않습니다.");
        }
    }
}




// ------------------------------------------------------

let balance = 10000;
const password = 1234;
const amount = document.getElementById("amount");
const current = document.getElementById("current");


function deposit() {
    const value1 = Number(amount.value);

    console.log("value1의 값", value1);


    balance += value1
    current.innerText = balance + Number(value1);

}

function withdrawal() {

    const password = prompt("비밀번호를 입력해주세요");
    if (password == null) { // 취소
        alert("취소");
    } else { // 확인

        // 입력한 비밀번호가 '1234'가 맞는지 확인
        if (password == '1234') {
            alert("비밀번호 일치");

            const value1 = Number(amount.value)
            
            current.innerText = balance -= Number(amount.value)
            

        } else {
            alert("비밀번호가 일치하지 않습니다.");
        }
    }
}
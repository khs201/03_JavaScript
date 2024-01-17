// 클래스 접근 테스트
function classTest() {

    const divs = document.getElementsByClassName("cls-test") // .cls-test 요소 모두 얻어오기

    console.log(divs);


    // divs [n]번째 요소에 배경색 변경
    divs[0].style.backgroundColor = "rgb(114,203,80)";
    divs[1].style.backgroundColor = "rgb(40,203,155)";
    divs[2].style.backgroundColor = "rgb(255,203,255)";

    for (let i = 0; i < divs.length; i++) {
        divs[i].innerText = `${i}번째 div 입니다`;
    }


}
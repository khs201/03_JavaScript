// 인라인 이벤트 모델 확인
function check1(btn) {
    // 매개 변수 : 함수 호출 시 () 내부에 작성된 값을
    //             전달 받아 저장하는 변수

    // 매개 변수 btn == 클릭한 버튼(this)
    console.log(btn);

    // 버튼의 배경색을 얻어와 저장
    const bgColor = btn.style.backgroundColor;

    // 처음에는 inline-style로 지정된 배경색이 없어서 ""(빈칸)
    console.log(bgColor);



    if (bgColor == "yellow") {
        btn.style.backgroundColor = "Pink";
    } else {
        btn.style.backgroundColor = "yellow";
    }
}
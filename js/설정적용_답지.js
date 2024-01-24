const applyBtn = document.querySelector("#apply-btn");


/* 적용하기 버튼 클릭 시 */
applyBtn.addEventListener("click", ()=>{
  
  /* 특정 시점에 요소/값을 얻어와야 되는데
    전역, 지역 변수 어떤걸로 선언할지 모르겠으면
    일단 다 지역 변수로 선언해라!!
  */

  const box     = document.querySelector("#box");
  const content = document.querySelector("#content");

  // 출력 문자열에 작성된 값 #box에 내용으로 대입
  box.textContent = content.value;

});


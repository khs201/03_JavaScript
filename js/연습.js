// "apply-btn"이라는 ID를 가진 요소를 선택합니다.
const applyBtn = document.querySelector("#apply-btn");

// "apply-btn" 요소에 클릭 이벤트 리스너를 추가합니다.
applyBtn.addEventListener("click", ()=>{

  // 각각의 요소를 선택합니다.
  const box     = document.querySelector("#box");
  const content = document.querySelector("#content");
  const boxWidth = document.querySelector("#box-width");
  const boxHeight = document.querySelector("#box-height");
  const fs = document.querySelector("#fs");
  const fontColor = document.querySelector("#box-font-color");
  const bgColor = document.querySelector("#box-bg-color");

  // 체크된 요소를 선택합니다.
  const fw = document.querySelector("[name='fw']:checked");
  const row = document.querySelector("[name='align-row']:checked");
  const col = document.querySelector("[name='align-col']:checked");

  // 박스의 너비를 설정합니다.
  box.style.width = boxWidth.value + "px";

  // 박스의 높이를 설정합니다.
  box.style.height = boxHeight.value + "px";

  // 박스의 글자 크기를 설정합니다.
  box.style.fontSize = fs.value + "px";

  // 박스의 글자색을 설정합니다.
  box.style.color = fontColor.value;

  // 박스의 배경색을 설정합니다.
  box.style.backgroundColor = bgColor.value;

  // 'fw'가 체크되어 있으면 박스의 글자 굵기를 설정합니다.
  if(fw != null){
    box.style.fontWeight = fw.value;
  }

  // 'row'가 체크되어 있으면 박스의 가로 정렬을 설정합니다.
  if(row != null){
    box.style.justifyContent = row.value;
  }

  // 'col'이 체크되어 있으면 박스의 세로 정렬을 설정합니다.
  if(col != null){
    box.style.alignItems = col.value;
  }

  // 박스의 내용을 설정합니다.
  box.textContent = content.value;

});

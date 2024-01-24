const btn = document.querySelector("#btn");
const result = document.querySelector("#result");







btn.addEventListener("click", () => {
    result.className = '';
    const input = document.querySelector("#input").value; // 인풋값 얻어오기
    result.innerText = input; // result에 input값 표시



    const boldness = document.querySelector("[name=boldness]:checked").value; // 굵기 체크된 값 구하기
    const rowA = document.querySelector("[name=rowA]:checked").value;   // 글자 정렬 체크된 값 구하기
    const colA = document.querySelector("[name=colA]:checked").value;


    const fontColor = document.querySelector("#fontColor").value; // 폰트색상값 구하기
    const width = Number(document.querySelector("#width").value); // 너비값 구하기
    const height = Number(document.querySelector("#height").value); // 높이값 구하기
    const fontSize = document.querySelector("#fontSize").value; // 폰트크기 구하기
    const bgc = document.querySelector("#bgc").value; // 배경색 구하기
    // document.getElementById('(아이디명)').style.width = (값);




    result.style.backgroundColor = `${bgc}`; // 배경색 적용
    result.style.color = `${fontColor}`; // 글자색 적용
    result.style.fontSize = `${fontSize}px`; // 폰트 크기 적용
    result.style.height = `${height}px`; // 높이 적용
    result.style.width = `${width}px`; // 너비 적용




    // 굵기 적용
    // style.fontWeight
    if (boldness == "bold") {
        result.classList.add("bold");
    } else {
        result.classList.add("normal");
    }

    // 글자 정렬 적용
    if (rowA == "left") {
        result.classList.add("left")
    } else if (rowA == "middle") {
        result.classList.add("center")
    } else if (rowA == "right") {
        result.classList.add("right")
    }

    // 수평 정렬 적용
    if (colA == "top") {
        result.classList.add("top")
    } else if (colA == "middle") {
        result.classList.add("middle")
    } else if (colA == "bottom") {
        result.classList.add("bottom")
    }




});



// document.querySelector("[name=boldness]:checked")
//.style.textAlign = "center";


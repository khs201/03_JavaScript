numbers = document.querySelectorAll(".number");
result = document.querySelector("#result");
resetBtn = document.querySelector("#resetBtn");
addBtn = document.querySelector("#addBtn");
pL = document.querySelector("#pL");




//숫자 추가 구현
numbers.forEach((number) => {
    number.addEventListener("click", e => {
        result.textContent += e.target.textContent;
    });
});


// 번호 추가 구현
addBtn.addEventListener("click", () => {
    // console.log("확인");

    const addPl = document.createElement('li');
    addPl.textContent = result.textContent.trim(); // 공백 제거해서 얻어오기
    pL.appendChild(addPl);
    const favBtn = document.createElement('button');
    favBtn.addEventListener('click', e => { // 즐찾 구현
        if (e.target.classList.contains("active")) {
            favBtn.textContent = '☆';
            favBtn.style.color = "black";
            addPl.style.color = "black";
        } else{
            favBtn.textContent = '★';
            favBtn.style.color = "orange";
            addPl.style.color = "red";
        }

        e.target.classList.toggle("active");
    });


    favBtn.textContent = '☆';
    favBtn.classList.add('fav');
    addPl.appendChild(favBtn);
    const removeBtn = document.createElement('button');
    removeBtn.addEventListener('click', () => { // 삭제 기능 구현
        pL.removeChild(addPl);
    });
    removeBtn.innerHTML = '&times;';
    removeBtn.classList.add('remove');
    addPl.appendChild(removeBtn);
    favBtn.style.marginLeft = '50px';
    removeBtn.style.marginLeft = '10px';
    result.innerHTML = "&nbsp;";


});

// 리셋 버튼 구현
resetBtn.addEventListener("click", e => {
    result.innerHTML = "&nbsp;";
});
resName = document.querySelector("#resName");
resInput = document.querySelector("#resInput");
list = document.querySelector("#list");
fixBtn = document.querySelector("#fixBtn");
addBtn = document.querySelector("#addBtn");
finBtn = document.querySelector("#finBtn");
delBtn = document.querySelector("#delBtn");


resName.addEventListener("click", () => {
    resName.style.display = "none";

    resInput.style.display = "block";
});


resInput.addEventListener('keydown', e => { // 엔터 키가 눌렸을 때
    if (e.key === 'Enter') {
        resName.textContent = resInput.value;
        resInput.style.display = "none";
        resName.style.display = "block";

    }
});

resInput.addEventListener("blur", e => { // 블러 됐을 때 

    resName.textContent = resInput.value;
    resInput.style.display = "none";
    resName.style.display = "block";
    if (e.target.value == "") {
        resName.textContent = "식당명을 입력하세요";
    };
});

fixBtn.addEventListener("click", e => {
    const menuList = document.querySelectorAll("li");
    fixBtn.style.display = "none"; // 수정 버튼 안 보이게
    addBtn.style.display = "block"; // 추가 버튼 보이게
    delBtn.style.display = "block"; // 삭제 버튼 보이게
    finBtn.style.display = "block"; // 종료 버튼 보이게



    menuList.forEach((menu) => {

        const text = menu.firstChild.textContent.trim();
        // const text = menu.childNodes[1].textContent.trim();
        const number = Number(menu.querySelector('span').textContent);
        menu.innerHTML = '<input type="checkbox" id="check"><input type="text" value="' + text + '" class="menuInput"><input type="text" value="' + number + '"class = "priceInput">';
    });





});

finBtn.addEventListener("click", e => {
    const menuList = document.querySelectorAll("li");
    const menuNameList = document.querySelectorAll(".menuInput");
    const menuPriceList = document.querySelectorAll(".priceInput");



    menuList.forEach((menu, index) => {

        if (menuNameList[index] && menuPriceList[index]) {
            const menuName = menuNameList[index].value;
            const menuPrice = menuPriceList[index].value;

            if (menuName == "" || menuPrice == "") {
                // menu.parentNode.parentNode.removeChild;
                menu.parentNode.removeChild(menu);
            } else {
                // 새로운 li 태그 생성
                const newLi = document.createElement("li");
                newLi.innerHTML = `${menuName}<span>${menuPrice}</span>원`;
                // 기존 li 태그를 새로운 li 태그로 교체
                menu.parentNode.replaceChild(newLi, menu);
            }
        }



        /* else {
            console.log(`menuNameList[${index}] or menuPriceList[${index}] is undefined`);
        } */

    });


    fixBtn.style.display = "block"; // 수정 버튼 보이게
    addBtn.style.display = "none"; // 추가 버튼 안 보이게
    delBtn.style.display = "none"; // 삭제 버튼 안 보이게
    finBtn.style.display = "none"; // 종료 버튼 안 보이게



});



addBtn.addEventListener("click", e => { // ***** 경고 출력 [Violation]'click' handler took 1207ms *******
    const menu = document.querySelectorAll("#list>li");
    if (menu.length == 15) { // 15개 까지 생성 제한
        alert("15개 까지만");
        return;
    };
    const addLi = document.createElement("li");
    addLi.innerHTML = `<input type="checkbox" id="check"><input type="text" placeholder="메뉴명" class="menuInput"><input type="text" placeholder="가격" class="priceInput"></input>`
    list.append(addLi);
});

// delBtn.addEventListener("click", e => {
//     document.querySelectorAll("#check");



// });
delBtn.addEventListener("click", e => {
    const checkboxes = document.querySelectorAll("#check");

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            checkbox.parentNode.remove();
        }
    });
});












// display : block / display: none
// add.eventlistener blur
// display : block / display: none

// add.eventlistener blur

// ///////////////////////////


// Mouse Events: click, dblclick, mousedown, mouseup, contextmenu, mouseout, mousewheel, mouseover
// Touch Events: touchstart, touchend, touchmove, touchcancel
// Keyboard Events: keydown, keyup, keypress
// Form Events: focus, blur, change, submit
// Window Events: resize, scroll, load, unload, hashchange
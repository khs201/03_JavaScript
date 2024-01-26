resName = document.querySelector("#resName");
resInput = document.querySelector("#resInput");
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
        const number = menu.querySelector('span').textContent;
        menu.innerHTML = '<input type="text" value="' + text + '"><input type="number" value="' + number + '">';
    });
    finBtn.addEventListener("click", e => {
        const menuList = document.querySelectorAll("li");
        const menuNameList = document.querySelectorAll("li>input[type='text']");
        const menuPriceList = document.querySelectorAll("li>input[type='number']");
        menuNameList.forEach((menuName) => {
            const textInput = menuName.value;
            console.log(menuName.value);
        });
    });

    /* finBtn.addEventListener("click", e => {
        const menuList = document.querySelectorAll("li");
        const menuNameList = document.querySelectorAll("li>input[type='text']");
        const menuPriceList = document.querySelectorAll("li>input[type='number']");
    
        menuNameList.forEach((menuName, index) => {
            const textInput = menuName.value;
            const numberInput = menuPriceList[index].value;
            menuList[index].innerHTML = '<span>' + textInput + '</span><span>' + numberInput + '</span>';
        });
    
        fixBtn.style.display = "block"; // 수정 버튼 보이게
        addBtn.style.display = "none"; // 추가 버튼 안 보이게
        delBtn.style.display = "none"; // 삭제 버튼 안 보이게
        finBtn.style.display = "none"; // 종료 버튼 안 보이게
    }); */
});





// document.querySelector('button').addEventListener('click', function() {
//     var lis = document.querySelectorAll('li');
//     lis.forEach(function(li) {
//         var text = li.firstChild.nodeValue.trim();
//         var number = li.querySelector('span').innerText;
//         li.innerHTML = '<input type="text" value="' + text + '"><input type="number" value="' + number + '">';
//     });
// });









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
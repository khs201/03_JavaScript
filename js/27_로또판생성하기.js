// 숫자 생성기

const createBtn = document.querySelector("#createBtn"); // "createBtn"이라는 id를 가진 요소를 선택합니다.
const container = document.querySelector(".container"); // "container"라는 클래스를 가진 요소를 선택합니다.
createBtn.addEventListener("click", () => { // "createBtn" 요소에 클릭 이벤트 리스너를 추가합니다.
    let count = 1; // 카운트를 세기 위한 변수를 선언하고 1로 초기화합니다.

    for (let row = 1; row < 10; row++) { // 9개의 행을 생성하기 위한 반복문입니다.
        const rowDiv = document.createElement("checkbox"); // 새로운 div 요소를 생성합니다. 이 div는 각 행을 나타냅니다.
        rowDiv.classList.add("rowBox");
        for (let col = 1; col < 6; col++) { // 각 행에 5개의 열을 생성하기 위한 반복문입니다.
            const div = document.createElement("checkbox"); // 새로운 div 요소를 생성합니다. 이 div는 각 숫자를 나타냅니다.
            div.innerText = count; // 생성한 div 요소의 내부 텍스트를 현재 count 값으로 설정합니다.
            div.classList.add("box");
            rowDiv.append(div); // 생성한 숫자 div를 행 div에 추가합니다.
            console.log(count); // 현재 count 값을 콘솔에 출력합니다.

            count++; // count 값을 1 증가시킵니다.
        }
        container.append(rowDiv); // 완성된 행 div를 container에 추가합니다.
    }
    
});
















// const createBtn = document.querySelector("#createBtn");
// const container = document.querySelector(".container");
// createBtn.addEventListener("click", () => {
//     let count = 1; // 카운트를 세기 위한 변수 선언

//     for (let row = 1; row < 10; row++) {
//         let str = ""
//         for (let col = 1; col < 6; col++) {
//             const div = document.createElement("div");
//             div.innerText = count;
//             container.append(div);
//             str += count + " ";


//             count++; // count 값을 1 증가


//         }
//         console.log(str);
//     }

// });





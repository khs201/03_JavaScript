numbers = document.querySelectorAll(".number");
result = document.querySelector("#result");
btn = document.querySelector("#btn");

numbers.forEach((number) => {
    number.addEventListener("click", e => {
        // number.style.backgroundColor = "pink";
        if (result.textContent.length > 9) {
            alert("10글자 까지만")
            return;
        };
        // console.log("확인");
        // let str = "";
        // console.log(number.textContent);
        result.textContent += e.target.textContent;
    });
});

btn.addEventListener("click", e => {
    result.textContent = "";
});


// numbers.forEach((number) => {
//     number.addEventListener("mouseover", e => {
//         number.style.backgroundColor = "red";
//     });
// });

// numbers.forEach((number) => {
//     number.addEventListener("mouseout", e => {
//         number.style.backgroundColor = "white";
//     });
// });
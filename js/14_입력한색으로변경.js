/* const colorbox1 = document.querySelector(".colorbox1");
const colorbox2 = document.querySelector(".colorbox2");
const colorbox3 = document.querySelector(".colorbox3");
const colorbox4 = document.querySelector(".colorbox4");
const colorbox5 = document.querySelector(".colorbox5");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const input4 = document.querySelector(".input4");
const input5 = document.querySelector(".input5");
const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
    colorbox1.style.backgroundColor = input1.value
    colorbox2.style.backgroundColor = input2.value
    colorbox3.style.backgroundColor = input3.value
    colorbox4.style.backgroundColor = input4.value
    colorbox5.style.backgroundColor = input5.value
    input1.value = "";
    input2.value = "";
    input3.value = "";
    input4.value = "";
    input5.value = "";
})


input1.addEventListener("keydown", function (e) {
    // e : 이벤트 객체(발생한 이벤트에 대한 정보를 담은 객체)
    // e.key : 입력된 키
    // console.log(e.key); = 눌러진 키를 인식하는걸 보여줌
    if (e.key == "Enter") {
        colorbox1.style.backgroundColor = input1.value;
        colorbox2.style.backgroundColor = input2.value;
        colorbox3.style.backgroundColor = input3.value;
        colorbox4.style.backgroundColor = input4.value;
        colorbox5.style.backgroundColor = input5.value;
        input1.value = "";
        input2.value = "";
        input3.value = "";
        input4.value = "";
        input5.value = "";
    }
})
input2.addEventListener("keydown", function (e) {
    // e : 이벤트 객체(발생한 이벤트에 대한 정보를 담은 객체)
    // e.key : 입력된 키
    // console.log(e.key); = 눌러진 키를 인식하는걸 보여줌
    if (e.key == "Enter") {
        colorbox1.style.backgroundColor = input1.value;
        colorbox2.style.backgroundColor = input2.value;
        colorbox3.style.backgroundColor = input3.value;
        colorbox4.style.backgroundColor = input4.value;
        colorbox5.style.backgroundColor = input5.value;
        input1.value = "";
        input2.value = "";
        input3.value = "";
        input4.value = "";
        input5.value = "";
    }
})
input3.addEventListener("keydown", function (e) {
    // e : 이벤트 객체(발생한 이벤트에 대한 정보를 담은 객체)
    // e.key : 입력된 키
    // console.log(e.key); = 눌러진 키를 인식하는걸 보여줌
    if (e.key == "Enter") {
        colorbox1.style.backgroundColor = input1.value;
        colorbox2.style.backgroundColor = input2.value;
        colorbox3.style.backgroundColor = input3.value;
        colorbox4.style.backgroundColor = input4.value;
        colorbox5.style.backgroundColor = input5.value;
        input1.value = "";
        input2.value = "";
        input3.value = "";
        input4.value = "";
        input5.value = "";
    }
})
input4.addEventListener("keydown", function (e) {
    // e : 이벤트 객체(발생한 이벤트에 대한 정보를 담은 객체)
    // e.key : 입력된 키
    // console.log(e.key); = 눌러진 키를 인식하는걸 보여줌
    if (e.key == "Enter") {
        colorbox1.style.backgroundColor = input1.value;
        colorbox2.style.backgroundColor = input2.value;
        colorbox3.style.backgroundColor = input3.value;
        colorbox4.style.backgroundColor = input4.value;
        colorbox5.style.backgroundColor = input5.value;
        input1.value = "";
        input2.value = "";
        input3.value = "";
        input4.value = "";
        input5.value = "";
    }
})
input5.addEventListener("keydown", function (e) {
    // e : 이벤트 객체(발생한 이벤트에 대한 정보를 담은 객체)
    // e.key : 입력된 키
    // console.log(e.key); = 눌러진 키를 인식하는걸 보여줌
    if (e.key == "Enter") {
        colorbox1.style.backgroundColor = input1.value;
        colorbox2.style.backgroundColor = input2.value;
        colorbox3.style.backgroundColor = input3.value;
        colorbox4.style.backgroundColor = input4.value;
        colorbox5.style.backgroundColor = input5.value;
        input1.value = "";
        input2.value = "";
        input3.value = "";
        input4.value = "";
        input5.value = "";
    }
}) */

const inputList = document.querySelectorAll(".input")
const cbList = document.querySelectorAll(".colorbox")
const btn = document.querySelector("#btn")

btn.addEventListener("click", function () {
    for (let i = 0; i < inputList.length; i++) {
        cbList[i].style.backgroundColor = inputList[i].value;
    }
})


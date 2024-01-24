/* const container = document.getElementById("container");
const add = document.getElementById("add");
const calc = document.getElementById("calc");

add.addEventListener("click", () => {
  const inputAdd = document.createElement("input");
  inputAdd.type = "number"
  console.log(inputAdd);
  inputAdd.classList.add("input");
  container.append(inputAdd);
  console.log(inputAdd);
})

calc.addEventListener("click", () => {
  const values = document.getElementsByClassName("input")
  let sum = 0;
  console.log(values);
  for (let i = 0; i < values.length; i++) {
    sum += Number(values[i].value);
  }
  console.log(sum);
  alert(`모든 수의 합 : ${sum}`);
})
 */
/////////////////////////// 기본 달성

const container = document.getElementById("container");
const add = document.getElementById("add");
const calc = document.getElementById("calc");

add.addEventListener("click", () => {
  const inputAdd = document.createElement("input");
  inputAdd.type = "number"
  console.log(inputAdd);
  inputAdd.classList.add("input");
  container.append(inputAdd);
  console.log(inputAdd);
  ///// 버튼 생성
  const removeAdd = document.createElement("button");
  removeAdd.innerText = "X"
  container.append(removeAdd);
  removeAdd.classList.add("remove");
  removeAdd.addEventListener("click", () => {
    inputAdd.remove()
    removeAdd.remove()
  })








})

calc.addEventListener("click", () => {
  const values = document.getElementsByClassName("input")
  let sum = 0;
  console.log(values);
  for (let i = 0; i < values.length; i++) {
    sum += Number(values[i].value);
  }
  console.log(sum);
  alert(`모든 수의 합 : ${sum}`);
})
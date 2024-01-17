function check1() {

    // 배열 선언 방법 확인
    const arr1 = new Array();
    const arr2 = new Array(3);
    const arr3 = [];
    const arr4 = ["사과", "바나나", "딸기"];

    console.log(arr1, arr2, arr3, arr4);

    // 배열명.length : 배열의 길이(배열에 칸 수 또는 저장된 데이터의 수)
    console.log(arr1.length, arr2.length, arr3.length, arr4.length);

    /*  배열의 index(색인, 번호) */

    // - 배열의 각 칸을 구분하는 번호
    // - 0부터 시작!!!
    // - 중간에 번호를 생략할 수 없다(항상 연속적)
    // - **** 마지막 index == 배열길이 -1이다 ****


    // 배열명[index] -> 배열의 해당 인덱스에 존재하는 데이터 반환
    console.log('arr4[0] : ', arr4[0]);
    console.log('arr4[1] : ', arr4[1]);
    console.log('arr4[2] : ', arr4[2]);


    // 배열명[index] = 값; -> 해당 인덱스에 지정된 값 대입
    arr2[0] = 100;
    arr2[1] = "눈온다";
    arr2[2] = true;
    // (JS 배열의 특징 : 인덱스별로 자료형을 다르게 할 수 있다)

    console.log("arr2 : ", arr2);

    ///////////////////////////////////////////////////////

    // JS 배열 특징을 이용한 사용법

    // 1. 길이 제한이 없다 -> 값을 배열에 원하는 만큼 추가 가능
    arr1[0] = "가";
    arr1[1] = "나";
    arr1[2] = "다";
    console.log("arr1 : ", arr1);

    // 2. 원하는 index에 값을 마음대로 추가할 수 있다
    // -> 중간에 건너뛴 index는 빈칸으로 채워진다
    arr1[5] = "마";
    console.log("arr1 : ", arr1);
}

// 배열 X for문 1
function check2() {
    // for문을 이용해서 배열 요소 초기화 하기


    // - index : 배열의 각 칸을 구분하는 번호
    // - 배열 요소 == 배열의 각 칸
    // - 초기화 : 변수/배열 요소에 처음으로 값을 대입하는 것


    // for x
    const arr1 = [];

    arr1[0] = `김밥`;
    arr1[1] = `라면`;
    arr1[2] = `떡볶이`;
    arr1[3] = `볶음밥`;

    // for o
    const arr2 = [];


    for (let i = 0; i <= 3; i++) {
        arr2[i] = i * 10;
    }

    console.log("arr1 : ", arr1);
    console.log("arr2 : ", arr2);


}

// 배열 X for문 2
function check3() {
    // 배열에 저장된 값 하나씩 순서대로 출력하기
    // -> for문을 이용해서 배열의 모든 요소 접근하기
    // -> 순차 접근 또는 반복 접근
    const arr = [10, 20, 50, 100, 500, 1000];

    // index는 0부터 배열 길이 -1까지 1씩 증가
    for (let i = 0; i < arr.length; i++) {
        console.log(`arr[${i}] == ${arr[i]}`);

    }
}

// 배열 x for문 3
function check4() {
    // for문을 이용해서 배열을 순서대로 초기화 한 후
    // 다른 for문을 이용해서 배열 요소를 하나씩 모두 출력

    const arr = new Array(5); // 5칸 짜리 배열(요소별로 내용 없음)
    // 1. 배열을 순서대로 초기화
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(prompt(`${i}숫자 입력`));
    }
    let sum = 0;
    // 2. 배열 요소를 하나씩 모두 출력 + sum
    for (let i = 0; i < arr.length; i++) {
        console.log(`arr[${i}] : ${arr[i]}`);
        sum += arr[i]; // 값 누적
    }
    console.log("sum : ", sum);
    console.log("평균 : ", sum / arr.length);

}

function selectMenu() {

    const menuResult = document.getElementById("menuResult");

    // 점심 메뉴로 초기화된 배열 생성
    const menus = ["굶기", "추어탕", "우육면", "제육", "라면"];

    // menus 배열 index 범위 내에서 난수 생성
    const randomNumber = Math.floor(Math.random() * menus.length);
    menuResult.innerText = menus[randomNumber];



}
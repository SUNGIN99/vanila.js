const clock = document.querySelector("h2#clock");

function clockOperation(){

    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    const time = `${hours}:${minutes}:${seconds}`;
    
    clock.innerText = time;
}

clockOperation(); //웹사이트 키자마자 시간 사용
setInterval(clockOperation, 1000);
// 특정 간격마다 실행할 동작을 가능하게함
// 첫번째 매개변수 : 핸들링함수
// 두번째 매개변수 : 반복할 간격 (ms 밀리초);
// https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API

//setTimeout()
// 대기시간을 기다린  후 동작 실행
// 첫번째 매개변수 : 실행할 함수
// 두번째 매개변수 : 대기시간 (ms 밀리초);

// Date Object
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date

// "1".padStart(2, "0");
// 문자열의 표현기준 
// 첫번재 매개변수 : 문자열길이
// 두번재 매개변수 : 문자열이 첫번째매개변수인 길이만큼 되지않는다면 앞에 추가할 문자열
// 예제는 "1"이 한글자이므로 앞에 "0"을 추가해서 "01"로 만들음
// "21".padStart(2,"0"); => 아무동작 x

// str.padEnd(2,"0");
// 두번재 매개변수 : "" 뒤에 추가할 문자열

// 가위 버튼에 적용할 click handler
const SCISSORS = '가위';
const ROCK = '바위';
const PAPER = '보';

// 함수 정의
function onScissorsclick() {    // 버튼 클릭 -> userInput prompt가 필요없음.
  let comInput;   // 지역변수로 처리를하는 중
  let randomNum = Math.random();

  if (randomNum < 0.33) comInput = SCISSORS;
  else if (randomNum < 0.66) comInput = ROCK;
  else comInput = PAPER;

  if(comInput === SCISSORS) {
    alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다.`);
  } else if (comInput === ROCK) {
    alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다.`);
  } else {
    alert(`컴퓨터 : ${comInput} - 컴퓨터를 이겼습니다.`);
  }
}

// 함수 정의
function onRockclick() {
  let comInput;   // 지역변수로 처리를하는 중
  let randomNum = Math.random();

  if (randomNum < 0.33) comInput = SCISSORS;
  else if (randomNum < 0.66) comInput = ROCK;
  else comInput = PAPER;

  if(comInput === SCISSORS) {
    alert(`컴퓨터 : ${comInput} - 컴퓨터를 이겼습니다.`);
  } else if (comInput === ROCK) {
    alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다.`);
  } else {
    alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다.`);
  }
}

// 함수 정의
function onPaperclick() {
  let comInput;   // 지역변수로 처리를하는 중
  let randomNum = Math.random();

  if (randomNum < 0.33) comInput = SCISSORS;
  else if (randomNum < 0.66) comInput = ROCK;
  else comInput = PAPER;

  if(comInput === SCISSORS) {
    alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다.`);
  } else if (comInput === ROCK) {
    alert(`컴퓨터 : ${comInput} - 컴퓨터를 이겼습니다.`);
  } else {
    alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다.`);
  }
}


// 위의 코드는 call1()유형으로 각각의 3개의 함수로 정의.
// 밑의 코드는 call2() 유형으로 하나의 함수로 통합.

function onButtonClick(userInput) {
  let comInput;   // 지역변수로 처리를하는 중
  let randomNum = Math.random();

  if (randomNum < 0.33) comInput = SCISSORS;
  else if (randomNum < 0.66) comInput = ROCK;
  else comInput = PAPER;

  // 출력문 리팩토링 파트
  let result = `컴퓨터 : ${comInput}`;

  if (userInput === SCISSORS) {
        // comInput 비교
        if (comInput === SCISSORS) {
          // 사용자가 비긴 경우
          result += '- 비겼습니다.';
          //alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다.`);
        } else if (comInput === ROCK) {
          // 사용자가 진 경우
          result += '- 졌습니다.';
          //alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다.`);
        } else {
          //사용자가 이긴 경우
          result += '- 이겼습니다.';
          //alert(`컴퓨터 : ${comInput} - 컴퓨터를 이겼습니다.`);
        }
      } else if (userInput === ROCK) {
        // comInput 비교
        if (comInput === SCISSORS) {
          // 사용자가 이긴 경우
          result += '- 이겼습니다.';
          //alert(`컴퓨터 : ${comInput} - 컴퓨터를 이겼습니다.`);
        } else if (comInput === ROCK) {
          // 비긴 경우
          result += '- 비겼습니다.';
          //alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다.`);
        } else {
          //사용자가 진 경우
          result += '- 졌습니다.';
          //alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다.`);
        }
      } else {
        // comInput 비교
        if (comInput === SCISSORS) {
          // 사용자가 진 경우
          result += '- 졌습니다.';
          //alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다.`)
        } else if (comInput === ROCK) {
          // 사용자가 이긴 경우
          result += '- 이겼습니다.';
          //alert(`컴퓨터 : ${comInput} - 컴퓨터를 이겼습니다.`)
        } else {
          //사용자가 비긴 경우
          result += '- 비겼습니다.';
          //alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다.`)
        }
      }
      alert(result);
    }
// 컴퓨터 관련 오브젝트
let computer = {
  score: 0,
  percent2: 0.5,
  percent3: 0.33
};

// 사용자 관련 오브젝트
let user = {
  score: 0,
  percent2: 0.5,
  percent3: 0.33
};

// 게임 관련 오브젝트
let game = {
  isComputerTurn: true,
  shootLeft: 15
};

function showText(s) {
  let textElement = document.getElementById('text');
  textElement.innerHTML = s;
}

function updatecomScore(score) {
  let comScoreElement = document.getElementById('computer-score');
  computer.score += score;

  comScoreElement.innerHTML = computer.score;
}

function updateuserScore(score) {
  let userScoreElement = document.getElementById('user-score');
  user.score += score;

  userScoreElement.innerHTML = user.score;
}

function disableComButton(flag) {
  let computerButtons = document.getElementsByClassName('btn-computer');
  for ( let i = 0 ; i < computerButtons.length ; i++) {
    computerButtons[i].disabled = flag;
  }
}

function disableUserButton(flag) {
  let userButtons = document.getElementsByClassName('btn-user');
  for ( let i = 0 ; i < userButtons.length ; i++) {
    userButtons[i].disabled = flag;
  }
}

// 여기에 시나리오 관련한 함수를 작성할 예정
function updateAI() {
  let scoreDiff = user.score - computer.score;

  if (scoreDiff >= 10) {
    computer.percent2 = 0.7;
    computer.percent3 = 0.43;
  } else if (scoreDiff >= 6) {
    computer.percent2 = 0.6;
    computer.percent3 = 0.38;
  } else if (scoreDiff <= -10) {  
    computer.percent2 = 0.3;
    computer.percent3 = 0.23;
  } else if (scoreDiff <= -6) {
    computer.percent2 = 0.4;
    computer.percent3 = 0.28;
  } 
}


function onComputerShoot() {
  if(!game.isComputerTurn) return;

  updateAI();     // 왜 호출하는 위치가 여기여야만 할까요?

  let shootType = Math.random() < 0.5 ? 2 : 3;

  if (Math.random() < computer['percent' + shootType]) { // 그럼 결과값은 'percent2'이거나 'percent3'가 되므로 computer['percent2']/computer['percent3']의 value가 산출됨
    showText('컴퓨터가 '+ shootType + '점 슛이 성공했습니다')
    updatecomScore(2);
  } else {
    showText('컴퓨터가 ' + shootType + '점 슛을 실패했습니다')
  }
  game.isComputerTurn = false;
  disableComButton(true);
  disableUserButton(false);
}

function onUserShoot(shootType) {
  if(game.isComputerTurn) return;

  updateAI(); 

  if (shootType === 2) {
    if (Math.random() < user.percent2) {
      showText('2점슛을 성공시켰습니다.🏀 now - computer');
      updateuserScore(2);
    } else {
      showText('2점슛을 실패했습니다!🎈 now - computer');
    }
  } else {
    if(Math.random() < user.percent3) {
      showText('3점슛을 성공시켰습니다 🎆 now - computer');
      updateuserScore(3);
    } else {
      showText('3점슛을 실패했습니다ㅜㅜㅜ👓 now - computer');
    }
  }

  game.isComputerTurn = true;
  disableComButton(false);
  disableUserButton(true);
  game.shootLeft --;

  let shootLeftElement = document.getElementById('shots-left')
  shootLeftElement.innerHTML = game.shootLeft;

  if (game.shootLeft === 0) {
    if (user.score > computer.score) {
      alert('이겼습니다');
      showText('사용자가 이겼습니다!😊');
    } else if (user.score === computer.score) {
      alert('비겼습니다.')
      showText('비겼습니다.');
    } else {
      alert('졌습니다.')
      showText('컴퓨터가 이겼습니다.😭');
    }
  }
}
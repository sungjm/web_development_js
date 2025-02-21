# 📝 **iPhone 스타일 메모 앱 프로젝트**  

![memo-app](https://img.shields.io/badge/상태-완료-brightgreen) ![version](https://img.shields.io/badge/버전-1.0-blue)  

---

## 📋 **목차**
- [📱 개요](#-개요)  
- [💡 프로젝트 핵심](#-프로젝트-핵심)  
- [📦 주요 기능](#-주요-기능)  
- [💻 코드 비교 및 차이점](#-코드-비교-및-차이점)  
- [📚 배운 점](#-배운-점)  
- [🚀 설치 및 실행](#-설치-및-실행)  
- [📜 회고](#-회고)  

---

## 📱 **개요**
이 프로젝트는 **iPhone 스타일의 메모 앱**으로, 사용자는 메모의 **제목, 내용, 작성자**를 입력하고 `localStorage`에 저장할 수 있습니다.  
메모는 리스트 화면에서 확인할 수 있으며, 클릭 시 상세 페이지(article.html)로 이동합니다.  

- **구성 파일:**  
  - **HTML:** `list.html`, `article.html`  
  - **CSS:** `reset.css`, `iphone_frame.css`, `list_header.css`, `border_list.css`, `article_header.css`, `main_article.css`  
  - **JavaScript:** `clock.js`, `list_service.js`, `article_service.js`  

---

## 💡 **프로젝트 핵심**

| 🗂 **주요 차이점** | ✅ **설명** |
|-----------------|---------------------------------------------|
| **1. 데이터 저장 방식** | 문자열 배열 대신 **객체 배열**을 사용 (예: `{id, title, content, writer}`) |
| **2. localStorage 적용** | `localStorage.setItem()`과 `JSON.stringify()`를 사용해 객체 배열 저장 |
| **3. localStorage 불러오기** | `localStorage.getItem()`과 `JSON.parse()`를 통해 객체 배열 복원 |
| **4. .map() 사용** | 배열의 각 요소를 `<li>` 태그로 변환하여 화면에 출력 |
| **5. Template Literals** | 백틱(``` ` ```)과 `${}`를 사용해 더 가독성 좋은 코드 작성 |

---

## 📦 **주요 기능**
✅ **메모 작성:** 제목, 내용, 작성자를 입력 후 localStorage에 저장  
✅ **메모 목록 보기:** 리스트 화면에서 모든 메모를 볼 수 있음  
✅ **메모 상세 보기:** 클릭 시 해당 메모의 내용을 상세 페이지에서 확인  
✅ **시간 표시:** iPhone 스타일의 헤더에 실시간 시간 표시 (시, 분)  
✅ **페이지 이동:** `location.href`를 통해 페이지 간 이동  

---

## 💻 **코드 비교 및 차이점**

### **1. localStorage에 문자열 배열 vs 객체 배열**
#### 🗂 **이전 프로젝트 (To-Do List)** - 문자열 배열 사용
```js
let todos = [];  // 문자열 배열

function addTodo() {
  const input = document.getElementById('todo-input');
  const newTodo = input.value.trim();

  if (newTodo) {
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));  // 문자열 배열 저장
    input.value = '';
  }
}
```

---

#### 🗂 **이번 프로젝트 (iPhone 메모 앱)** - 객체 배열 사용
```js
let boardInputDatas = {
  id: 0,
  title: "",
  content: "",
  writer: ""
};

function addBoard() {
  let boardDatas = localStorage.getItem("boardDatas")
    ? JSON.parse(localStorage.getItem("boardDatas"))
    : [];

  boardInputDatas.id = boardDatas.length;
  boardDatas.push({ ...boardInputDatas });

  localStorage.setItem("boardDatas", JSON.stringify(boardDatas));  // 객체 배열 저장
}
```
**✅ 차이점:**  
- **`JSON.stringify()`**: 객체 배열을 JSON 문자열로 변환하여 저장  
- **`JSON.parse()`**: 문자열을 다시 객체 배열로 변환하여 사용  
- **`push()`**: 객체를 배열에 추가  

---

### **2. localStorage에서 데이터 불러오기 및 .map() 사용**
#### 🗂 **To-Do List** - 단순 문자열 표시
```js
function renderTodos(todos) {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = todos.map(todo => `<li>${todo}</li>`).join('');
}
```

---

#### 🗂 **iPhone 메모 앱** - 객체 데이터를 화면에 표시
```js
function loadList() {
  let boardDatas = localStorage.getItem("boardDatas")
    ? JSON.parse(localStorage.getItem("boardDatas"))
    : [];

  const boardList = document.querySelector('.board-list-container');
  boardList.innerHTML = boardDatas.map(data => `
    <li class="board-box">
      <header class="board-header">
        <h1>${data.title} (${data.writer})</h1>
      </header>
      <main class="board-main">
        <pre>${data.content}</pre>
      </main>
    </li>
  `).join("");
}
```
**✅ 차이점:**  
- **`.map()`**: 배열의 각 객체를 `<li>` 태그로 변환  
- **백틱(``` ` ```)과 `${}`**: 템플릿 리터럴로 HTML 코드 작성  
- **`${data.title}`, `${data.writer}`, `${data.content}`**: 객체의 속성값을 직접 삽입  

---

### **3. 실시간 시계 기능 (clock.js)**
```js
function clockRun() {
  const phoneClock = document.querySelector('.phone-clock');
  setInterval(() => {
    const now = new Date();
    const nowHours = now.getHours();
    const nowMinutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
    phoneClock.innerHTML = `${nowHours}:${nowMinutes}`;
  }, 1000);
}

clockRun();
```
**✅ 설명:**  
- **`new Date()`**: 현재 시간 가져오기  
- **삼항 연산자**: 한 자리 수일 경우 앞에 `0`을 붙임 (예: `09:05`)  
- **`setInterval()`**: 1초마다 시계 업데이트  

---

### **4. 페이지 간 이동 (뒤로 가기 버튼)**
```js
const backButton = document.querySelector('.back-button');
backButton.onclick = () => {
  location.href = './list.html';  // 뒤로 가기 (list.html로 이동)
};
```
**✅ 설명:**  
- **`location.href`**: 다른 HTML 페이지로 이동  
- **사용 예시:** `list.html`에서 메모 클릭 시 `article.html`로 이동, `article.html`에서는 다시 `list.html`로 돌아감  

---

## 📚 **배운 점**
### ✅ **주요 학습 내용**
- **localStorage의 다양한 사용법:**  
  - 문자열 배열뿐만 아니라 **객체 배열**도 저장 및 불러오기 가능  
- **.map()과 Template Literals 사용:**  
  - 배열을 효율적으로 순회하고, **가독성 좋은 코드** 작성 가능  
- **페이지 간 이동:**  
  - 단일 페이지 애플리케이션(SPA) 대신, **HTML 파일 간 이동** 사용  
- **JavaScript의 DOM 조작:**  
  - `querySelector()`와 `querySelectorAll()`을 활용해 **더 직관적인 요소 선택**  

---

### 📌 **향후 개선 사항**
- **삭제 및 수정 기능 추가:** 메모를 삭제하거나 수정할 수 있도록 기능 확장  
- **반응형 디자인:** 모바일과 데스크탑 모두에서 보기 좋도록 **CSS 개선**  
- **Vue.js 또는 React 적용:** 더 복잡한 프로젝트를 위해 **프레임워크** 도입 고려  

---

## 🚀 **설치 및 실행**
```bash
# 1. 레포지토리 클론
git clone https://github.com/sungjm/iphone_frame_memo.git

# 2. 프로젝트 폴더로 이동
cd iphone_frame_memo

# 3. list.html 파일을 브라우저로 열어서 실행
```

---

## 📜 **회고**
📱 **iPhone Frame:** 외부에서 가져온 CSS로 디자인 구현  
💾 **localStorage:** 간단하면서도 효과적인 데이터 저장 및 불러오기 방식  
💡 **학습 과정:** 문자열 배열과 객체 배열의 차이를 이해하고 실제 프로젝트에 적용  

---

## 🤝 **기여 방법**
기여를 원하시면 **이슈**를 등록하거나 **풀 리퀘스트(PR)**를 제출해 주세요.  
도움이 되셨다면 **GitHub 저장소에 ⭐️ 스타를 눌러주세요!**  

---
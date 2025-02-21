let students = [
  { id: 1, name: "김일", grade: 85},
  { id: 2, name: "김이", grade: 100},
  { id: 3, name: "김삼", grade: 78},
  { id: 4, name: "김사", grade: 55},
  { id: 5, name: "김오", grade: 92},
  { id: 6, name: "김육", grade: 37},
];

// 1. 성적이 80점 이상인 학생만 추출
// const topStudents = students.filter(topStudent => topStudent.grade >= 80);
const topStudents = students.filter(function(topStudent) {
  return topStudent.grade >= 80;
})
console.log(`성적 우수 학생 :`, topStudents);

// 2. 성적이 60점 미만인 학생만 추출
// const lowStudents = students.filter(lowStudent => lowStudent.grade < 60);
const lowStudents = students.filter(function(lowStudent) {
  return lowStudent.grade < 60;
})
console.log(`성적 미흡 학생 :`, lowStudents);

// 3. 이름이 '김'으로 시작하는 학생만 추출 
// const KimStudents = students.filter(KimStudent => KimStudent.name.startsWith('김'));
const KimStudent = students.filter(function(KimStudent) {
  return KimStudent.name.startsWith('김');
})
console.log(`이름이 김으로 시작하는 학생 :`, KimStudent);
// تعريف ثوابت
const studentGrade = 85;
const passingGrade = 60;
const excellentGrade = 90;

console.log(`Checking grade: ${studentGrade}`);

// نستخدم 'if' و 'else if' و 'else'
// نستخدم الأقواس () للشرط و {} للكود
// نستخدم >= للمقارنة

if (studentGrade >= excellentGrade) {
  console.log("Result: Excellent! (A)");
  
} else if (studentGrade >= passingGrade) {
  console.log("Result: Pass. (C)");
  
} else {
  console.log("Result: Fail. (F)");
}

// مثال آخر باستخدام '==='
const studentName = "Sara";

if (studentName === "Sara") {
  console.log(`Welcome, ${studentName}!`);
}
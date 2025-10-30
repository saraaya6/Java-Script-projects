// 1. تعريف ثابت لدرجة النجاح
const passingGrade = 60;

// 2. تعريف دالة (Arrow Function) للتحقق من الدرجة
// الدالة تأخذ "grade" كمدخل (parameter)
// وترجع "String" (نص) كنتيجة
const checkGrade = (grade) => {
  if (grade >= 90) {
    return "Excellent (A)";
  } else if (grade >= passingGrade) {
    return "Pass (C)";
  } else {
    return "Fail (F)";
  }
};

// --- الآن الكود الرئيسي أصبح نظيفاً جداً ---

// 3. مصفوفة الدرجات
const grades = [85, 92, 55, 49];

console.log("--- Starting grade evaluation ---");

// 4. نستخدم 'for...of' للمرور على الدرجات
for (const currentGrade of grades) {
  
  // 5. نستدعي الدالة لكل درجة
  const result = checkGrade(currentGrade);
  
  console.log(`Grade ${currentGrade}: ${result}`);
}

console.log("--- Finished grade evaluation ---");
// 1. مصفوفة الدرجات
const grades = [85, 92, 55, 68, 49, 76];

// 2. الثابت
const passingGrade = 60;

console.log("--- Starting grade evaluation ---");

// 3. نستخدم 'for...of' للمرور على كل درجة
for (const grade of grades) {
  
  // 4. نستخدم 'if...else' للتحقق من كل درجة
  if (grade >= passingGrade) {
    console.log(`Grade ${grade}: Pass`);
  } else {
    console.log(`Grade ${grade}: Fail`);
  }
  
}

console.log("--- Finished grade evaluation ---");
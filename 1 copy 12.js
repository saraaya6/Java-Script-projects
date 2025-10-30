const students = ["Ahmed", "Sara", "Fatima"];

// "لكل 'student' (طالب) "من" (of) مصفوفة 'students' (الطلاب)"
for (const student of students) {
  // لا نحتاج i ولا students[i]
  // المتغير 'student' يحمل القيمة مباشرة
  console.log(`Welcome, ${student}!`);
}
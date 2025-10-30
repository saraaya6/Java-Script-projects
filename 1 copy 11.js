const students = ["Ahmed", "Sara", "Fatima"];

console.log(students[0]); // يطبع "Ahmed"
console.log(students[1]); // يطبع "Sara"

// تغيير قيمة عنصر
students[1] = "Sara Al-yafey";
console.log(students); 
// يطبع ["Ahmed", "Sara Al-yafey", "Fatima"]

console.log(students.length);
students.push("omar");// يطبع ["Ahmed", "Sara Al-Ali", "Fatima", "Omar"]
console.log(students);

students.pop();// سيحذف "Omar"

console.log(students); // يرجع يطبع



// for (البداية; الشرط; الخطوة) { ... }
for (let i = 0; i < students.length; i++) {
  // i يبدأ من 0
  // يستمر طالما i أصغر من طول المصفوفة (3)
  // i++ يعني (i = i + 1) في كل لفة
  
  console.log(`Student at index ${i} is: ${students[i]}`);
}

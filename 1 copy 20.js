const student = {
  name: "Fatima",
  grades: [100, 90, 80], // مصفوفة كـ "خاصية"
  
  // Method لحساب المتوسط
  calculateAverage: function() {
    let sum = 0;
    
    // نستخدم 'for...of' للمرور على مصفوفة الدرجات "الخاصة به"
    for (const grade of this.grades) {
      sum = sum + grade; // أو sum += grade
    }
    
    // المتوسط = المجموع / العدد
    const average = sum / this.grades.length;
    return average;
  }
};

console.log(`Student: ${student.name}`);
console.log(`Grades: ${student.grades}`);

// نستدعي الـ Method
const avg = student.calculateAverage();
console.log(`Average: ${avg}`); // يطبع 90
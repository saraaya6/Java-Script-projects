const getPassingGrades = (gradesList) => {
  // 1. ننشئ مصفوفة "جديدة" فارغة
  const passingGrades = [];
  
  // 2. نمر على كل درجة في المصفوفة "الأصلية"
  for (const grade of gradesList) {
    
    // 3. إذا كانت الدرجة ناجحة...
    if (grade >= 60) {
      // 4. ...أضفها للمصفوفة "الجديدة"
      passingGrades.push(grade);
    }
  }
  
  // 5. نرجع المصفوفة الجديدة المفلترة
  return passingGrades;
};

// مصفوفة للتجربة
const allGrades = [85, 92, 55, 68, 49, 76, 100];
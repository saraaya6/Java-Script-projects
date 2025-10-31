// بيانات للتجربة
const students = [
  { id: 1, name: "Sara", major: "IT" },
  { id: 2, name: "Ahmed", major: "CS" },
  { id: 3, name: "Fatima", major: "IT" },
  { id: 4, name: "Ali", major: "Engineering" }
];

// الدالة
const getNamesByMajor = (studentsList, major) => {
  // 1. مصفوفة فارغة للأسماء المطابقة
  const names = [];
  
  // 2. نمر على كل "كائن طالب" في المصفوفة
  for (const student of studentsList) {
    
    // 3. هل تخصص الطالب "يطابق" التخصص المطلوب؟
    if (student.major === major) {
      // 4. إذا نعم، أضف "اسم" الطالب للمصفوفة الجديدة
      names.push(student.name);
    }
  }
  
  // 5. نرجع مصفوفة الأسماء
  return names;
};
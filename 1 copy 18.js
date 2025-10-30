// في بايثون:
// student = { "name": "Sara", "age": 22 }

// في جافا سكربت:
const student = {
  // المفتاح (Key) : القيمة (Value)
  name: "Sara",
  age: 22,
  isEnrolled: true,
  skills: ["Flutter", "Python", "UI/UX"] // القيمة يمكن أن تكون مصفوفة
};


console.log(student.name); // يطبع "Sara"
console.log(student.age);  // يطبع 22
console.log(student.skills[0]); // يطبع "Flutter" (لأن skills مصفوفة)
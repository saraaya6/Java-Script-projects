// الطريقة الطويلة (جيدة)
const add = (a, b) => {
  return a + b;
};

// الطريقة المختصرة (Implicit Return) - (ممتازة)
const addShort = (a, b) => a + b;

// كلاهما يعطي نفس النتيجة
console.log(add(5, 10)); // 15
console.log(addShort(5, 10)); // 15
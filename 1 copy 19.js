const person = {
  firstName: "Ali",
  lastName: "Ahmed",
  
  // هذا "Method"
  // نستخدم صياغة الدالة التقليدية هنا لسبب مهم (سيأتي)
  greet: function() {
    // 'this' هي كلمة مفتاحية خاصة جداً
    // 'this' تعني "هذا الكائن الذي أنا بداخله الآن"
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  }
};

// كيف نستدعي الـ Method؟
person.greet(); // يطبع "Hello, my name is Ali Ahmed"
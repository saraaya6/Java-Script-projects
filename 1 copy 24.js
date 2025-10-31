const countVowels = (text) => {
  // 1. قائمة الحروف التي نبحث عنها
  const vowels = ["a", "e", "i", "o", "u"];
  
  // 2. عدّاد يبدأ من صفر
  let vowelCount = 0;
  
  // 3. نمر على كل حرف في النص
  for (const char of text) {
    
    // 4. نحول الحرف إلى صغير (لتجنب A و a)
    const lowerChar = char.toLowerCase();
    
    // 5. هل الحرف الصغير "موجود ضمن" مصفوفة vowels؟
    if (vowels.includes(lowerChar)) {
      vowelCount = vowelCount + 1; // أو vowelCount++
    }
  }
  
  // 6. نرجع العدد النهائي
  return vowelCount;
};
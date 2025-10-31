const reverseString = (text) => {
  // 1. نبدأ بنص "فارغ"
  let reversedText = "";
  
  // 2. نمر على كل حرف في النص الأصلي
  for (const char of text) {
    
    // 3. النقطة الأهم:
    // نضيف الحرف "قبل" النص المتكون لدينا
    // اللفة 1: char = "H". reversedText = "H" + "" -> "H"
    // اللفة 2: char = "e". reversedText = "e" + "H" -> "eH"
    // اللفة 3: char = "l". reversedText = "l" + "eH" -> "leH"
    // وهكذا...
    reversedText = char + reversedText;
  }
  
  // 4. نرجع النص المعكوس
  return reversedText;
};
// الدالة التي تختار عشوائياً
const pickRandomItem = (list) => {
  // Math.random() يعطي رقم بين 0 و 0.99
  // نضربه بطول المصفوفة
  const randomIndex = Math.floor(Math.random() * list.length);
  
  // نرجع العنصر الموجود في ذلك الفهرس العشوائي
  return list[randomIndex];
};

// مصفوفة للتجربة
const teams = ["Real Madrid", "Barcelona", "Liverpool", "Man City"];
let isAdult = true;
let hasLicense = false;

// هل هو بالغ "و" لديه رخصة؟
console.log(isAdult && hasLicense); // false

// هل هو بالغ "أو" لديه رخصة؟
console.log(isAdult || hasLicense); // true

// "ليس" بالغاً؟
//  ! التعجب معناها ليس "للنفي"
console.log(!isAdult); // false
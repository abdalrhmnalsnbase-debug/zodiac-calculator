function getZodiacSign() {
  const day = parseInt(document.getElementById('day').value);
  const month = parseInt(document.getElementById('month').value);
  const resultBox = document.getElementById('result-box');
  const zodiacName = document.getElementById('zodiac-name');

  if (!day || !month) return;

  const daysInMonth = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (day > daysInMonth[month]) {
    alert('الرجاء إدخال يوم صحيح للشهر المحدد');
    return;
  }

  let sign = '';

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    sign = 'برج الحمل ♈';
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    sign = 'برج الثور ♉';
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    sign = 'برج الجوزاء ♊';
  } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    sign = 'برج السرطان ♋';
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    sign = 'برج الأسد ♌';
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    sign = 'برج العذراء ♍';
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    sign = 'برج الميزان ♎';
  } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    sign = 'برج العقرب ♏';
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    sign = 'برج القوس ♐';
  } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    sign = 'برج الجدي ♑';
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    sign = 'برج الدلو ♒';
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    sign = 'برج الحوت ♓';
  }

 
  zodiacName.textContent = sign;
  resultBox.classList.remove('hidden');
}





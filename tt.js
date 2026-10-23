
function getZodiacSign() {
  const day = parseInt(document.getElementById('day').value);
  const month = parseInt(document.getElementById('month').value);
  const resultBox = document.getElementById('result-box');
  const zodiacName = document.getElementById('zodiac-name');
  const zodiacTraits = document.getElementById('zodiac-traits');

  if (!day || !month) return;

  const daysInMonth = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (day > daysInMonth[month]) {
    alert('الرجاء إدخال يوم صحيح للشهر المحدد');
    return;
  }

  let sign = '';
  let traits = '';

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    sign = 'برج الحمل ♈';
    traits = 'التميز: الشجاعة، الحماس الثقة بالنفس، والقدرة العالية على القيادة والمبادرة.';
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    sign = 'برج الثور ♉';
    traits = 'التميز: الصبر الشديد، الموثوقية، الإصرار، وحب الاستقرار والأمان المادي.';
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    sign = 'برج الجوزاء ♊';
    traits = 'التميز: الذكاء الحاد، التكيف السريع، القدرة العالية على التواصل، وحب التعلم.';
  } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    sign = 'برج السرطان ♋';
    traits = 'التميز: الحنان المفرط، الوفاء، الإبداع، وقوة الحدس والعاطفة الصادقة.';
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    sign = 'برج الأسد ♌';
    traits = 'التميز: الكاريزما العالية، الكرم، الشجاعة، وحب الظهور وتحقيق النجاحات.';
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    sign = 'برج العذراء ♍';
    traits = 'التميز: الدقة، الذكاء التحليلي، التنظيم العالي، والحرص على مساعدة الآخرين.';
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    sign = 'برج الميزان ♎';
    traits = 'التميز: العدل، الدبلوماسية، حب الجمال والفن، والسعي الدائم لتحقيق التوازن.';
  } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    sign = 'برج العقرب ♏';
    traits = 'التميز: الغموض الجذاب، الشغف القوي، الوفاء المطلق، وقوة الإرادة والتركيز.';
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    sign = 'برج القوس ♐';
    traits = 'التميز: التفاؤل، حب المغامرة والسفر، الصراحة، وحب الحرية والانطلاق.';
  } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    sign = 'برج الجدي ♑';
    traits = 'التميز: الطموح الكبير، الانضباط، الجدية في العمل، والاعتماد على النفس.';
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    sign = 'برج الدلو ♒';
    traits = 'التميز: الابتكار، التفكير المستقبلي، الاستقلالية، وحب الإنسانية ومساعدة الجماعة.';
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    sign = 'برج الحوت ♓';
    traits = 'التميز: الخيال الواسع، التعاطف العميق مع الآخرين، الرومانسية، والروح الإبداعية.';
  }

  // عرض اسم البرج ومميزاته
  zodiacName.textContent = sign;
  zodiacTraits.textContent = traits;
  resultBox.classList.remove('hidden');
}
function shareWhatsApp() {
  const zodiac = document.getElementById('zodiac-name').textContent;
  const siteUrl = window.location.href;
  const text = `طلع برجي هو ${zodiac}! 🔮\nتعرف على برجك من هنا: `;
  window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text + siteUrl)}`, '_blank');
}

function shareFacebook() {
  const siteUrl = window.location.href;
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteUrl)}`, '_blank');
}

function copyInstagramText() {
  const zodiac = document.getElementById('zodiac-name').textContent;
  const text = `برجي هو ${zodiac}! 🔮✨`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      alert("تم نسخ النص! يمكنك لصقه في إنستغرام.");
    });
  } else {
    alert("امسخ النص يدويًا: " + text);
  }
}

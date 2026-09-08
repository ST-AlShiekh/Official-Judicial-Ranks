const ranks=[
  // Executive Leadership
  ["Executive Leadership", "CHIEF OF DOJ", "القيادة التنفيذية العليا", 5, "قيادة وزارة العدل، رسم السياسات المؤسسية العليا، الإشراف على القضاء الأعلى، وإدارة العلاقات السيادية العليا.", "سلطة تنفيذية عليا، إجماع مجلس القيادة، سجل مؤسسي استثنائي وخبرة قيادية فائقة."],
  ["Executive Leadership", "DEPUTY CHIEF OF DOJ", "نائب رئيس وزارة العدل", 5, "مساعدة رئيس الوزارة، الإشراف على العمليات المشتركة بين القطاعات، مراجعة الإجراءات التأديبية الكبرى، وإدارة التنفيذ الإداري الداخلي.", "ثقة تنفيذية، سجل قيادي متميز، أداء عبر القطاعات، وتعيين رسمي موثق."],
  ["Executive Leadership", "ATTORNEY GENERAL", "النائب العام", 4, "توجه السياسات القضائية والاتهامية في المدينة، الإشراف على لوائح الاتهام الكبرى، وتقديم القيادة القانونية العليا للقطاعات.", "سجل قانوني استثنائي، خبرة قيادية، اجتياز اختبارات قانونية صارمة، واعتماد تنفيذي."],

  // Ordinary Judiciary
  ["Ordinary Judiciary", "JUDGE", "قاضي", 1, "الفصل في القضايا المدنية والجنائية الصغرى المحالة، إدارة جلسات المحكمة الرسمية، تقييم الشهادات وإصدار الأحكام المسببة.", "خدمة بحد أدنى مطلوب، تدريب قضائي تخصصي، نجاح في إدارة قضايا أولية، وسجل تأديبي نظيف."],
  ["Ordinary Judiciary", "SENIOR JUDGE", "قاضي أول", 2, "نظر القضايا المدنية والجنائية المعقدة، الإشراف على إجراءات الجلسات التمهيدية، ودعم المعايير القضائية وتوجيه القضاة الجدد.", "مدة خدمة ممتدة، سجل قضايا مكتملة، تدريب قضائي متقدم، وتقييمات أداء عالية."],
  ["Ordinary Judiciary", "CHIEF JUDGE", "رئيس المحكمة", 3, "رئاسة الدائرة القضائية العادية، الحفاظ على هيبة وقواعد المحكمة، توزيع القضايا الواردة، وإجراء تقييمات الأداء القضائي.", "خبرة قيادية متقدمة، سجل أحكام استثنائي، اختبار مجلس متقدم، وموافقة قيادية عليا."],

  // Administrative Judiciary
  ["Administrative Judiciary", "JUDGE", "قاضي إداري", 1, "الفصل في النزاعات الإدارية، مراجعة قرارات الجهات الحكومية، النظر في طلبات الالتماس الرسمية، وإصدار الأمر التنظيمي المؤقت.", "دورة تدريب قانون إداري، تتبع قضايا بإشراف، تقييم أدائي قياسي، وتحقيق الحد الأدنى للخدمة."],
  ["Administrative Judiciary", "SENIOR JUDGE", "قاضي إداري أول", 2, "معالجة النزاعات الإدارية المعقدة، تقييم اللوائح التنظيمية للشركات والجهات، وتوجيه القضاة الإداريين المبتدئين.", "خدمة مؤسسية ممتدة، تسوية نزاعات إدارية معقدة، تدريب تنظيمي متقدم، ومراجعة دقيقة."],
  ["Administrative Judiciary", "CHIEF JUDGE", "رئيس المحكمة الإدارية", 3, "رئاسة مسار القضاء الإداري، الإشراف على الامتثال القانوني الهيكلي، ووضع اللوائح القياسية للتحكيم الحكومي.", "سجل قيادي واسع، مؤهلات قانونية متقدمة، اختبار شامل للمجلس، واعتماد تنفيذي رفيع."],

  // Constitutional Judiciary
  ["Constitutional Judiciary", "JUDGE", "قاضي دستوري", 1, "مراجعة الطعون الدستورية، تقييم قوانين المدينة مقابل الميثاق التأسيسي، وترؤس النزاعات التشريعية التمهيدية.", "تدريب تخصصي بالقانون الدستوري، خدمة تفصيلية مقررة، تقييمات قضايا موثقة، وسجل مهني نظيف."],
  ["Constitutional Judiciary", "SENIOR JUDGE", "قاضي دستوري أول", 2, "معالجة المسائل الدستورية المعقدة، صياغة التفسيرات القانونية الاستشارية، ودعم الاتساق الهيكلي عبر الفروع القانونية.", "خدمة دستورية ممتدة، مؤهلات أكاديمية متقدمة، تقييمات زملاء قوية، ومراجعة لجنة رسمية."],
  ["Constitutional Judiciary", "CHIEF JUDGE", "رئيس المحكمة الدستورية", 3, "قيادة العمل القضائي الدستوري، حماية المعايير المؤسسية العليا، وإصدار الأحكام الدستورية النهائية الباتة.", "خبرة دستورية استثنائية، قيادة مثبتة، اختبار كبار متقدم، وموافقة تنفيذية رسمية نهائية."],

  // Public Prosecution
  ["Public Prosecution", "PROSECUTOR", "مدعي عام", 1, "تمثيل المصلحة العامة، مراجعة تقارير القبض الشرطية، الموافقة على لوائح الاتهام الرسمية، وإدارة المحاكمات الأولية.", "إتمام برنامج تدريب النيابة، تدقيق ملفات قضايا بإشراف، خدمة ميدانية مطلوبة، وتقييم أداء مرضي."],
  ["Public Prosecution", "SENIOR PROSECUTOR", "مدعي عام أول", 2, "مباشرة قضايا الجنايات المعقدة، فحص الأدلة الكبرى والمتحصلات، ومراجعة لوائح الاتهام الخاصة بالمدعين المبتدئين.", "فترة ميدانية ممتدة، إغلاق قضايا جنايات كبرى بنجاح، تدريب محاكمات متقدم، وتقييم تشغيلي عالٍ."],
  ["Public Prosecution", "CHIEF PROSECUTOR", "رئيس النيابة العامة", 3, "قيادة عمليات النيابة العامة، الإشراف على معايير الادعاء على مستوى المدينة، وتنسيق التحقيقات والاتهامات المشتركة.", "سجل قيادي مثبت، أداء استثنائي في المحاكمات، اختبار مجلس، واعتماد مؤسسي رسمي."],

  // Investigations Department
  ["Investigations Department", "INVESTIGATOR", "محقق", 1, "إجراء التحقيقات الجنائية المصرح بها، استجواب المشتبه بهم، جمع الأدلة الجنائية والرقمية، وصياغة ملفات القضايا المفصلة.", "دورة أكاديمية مكثفة للتحقيق، دراسات قضايا ميدانية بإشراف، شهادة جمع أدلة، وتقييم نظيف."],
  ["Investigations Department", "SENIOR INVESTIGATOR", "محقق أول", 2, "قيادة ملفات التحقيق السري والجرائم الكبرى، إدارة فرق جمع الأدلة الفورية، ومراجعة تقارير المحققين المبتدئين.", "خبرة ميدانية واسعة، حل ملفات تحقيق كبرى بنجاح، تدريب استجواب متقدم، وتقييم عالٍ."],
  ["Investigations Department", "LEAD INVESTIGATOR", "محقق رئيسي", 3, "تنسيق التحقيقات التكتيكية متعددة الجهات، قيادة وحدات التحقيق المتخصصة، والإشراف على ملفات التهديد الأمني الرفيع.", "سجل قيادي مثبت، محفظة تحقيقات معقدة، شهادة تكتيكية متقدمة، وموافقة قيادية عليا."],
  ["Investigations Department", "CHIEF INVESTIGATOR", "رئيس التحقيقات", 4, "إدارة كامل إدارة التحقيقات، وضع البروتوكولات التشغيلية، والحفاظ على المعايير الصارمة للامتثال التحقيقي.", "سجل تحقيقي طويل الأمد استثنائي، مؤهلات قيادية عليا، اختبار صارم، وموافقة مجلس تنفيذي."],

  // Legal Defense — Advocacy
  ["Legal Defense — Advocacy", "TRAINEE ATTORNEY", "محامٍ متدرب", 1, "دعم الدفاعات القانونية الخاضعة للإشراف، إجراء الأبحاث القانونية الأساسية، ومساعدة المحامين الكبار في تجهيز وثائق المحكمة.", "إتمام تدريب نقابة المحامين، تتبع مهام بإشراف، وتقييم السلوك والأخلاقيات المهنية."],
  ["Legal Defense — Advocacy", "JUNIOR ATTORNEY", "محامٍ جونيور", 2, "مباشرة دفاعات العملاء الصغرى المعتمدة وفق المعايير المهنية، تقديم الدفوع الروتينية، وحضور جلسات المحكمة الأولية.", "الحد الأدنى لمدّة الممارسة، سجل قضايا معتمد، تدريب أخلاقيات مهنية، وتوصية مشرف."],
  ["Legal Defense — Advocacy", "ATTORNEY", "محامٍ معتمد", 3, "مباشرة قضايا العملاء الجنائية والمدنية المستقلة، تقديم المرافعات في المحكمة، وتفاوض التسويات القانونية الرسمية.", "خبرة عملية واسعة، استيفاء حصص القضايا، شهادات نقابة معتمدة، وسجل تأديبي نظيف."],
  ["Legal Defense — Advocacy", "SENIOR ATTORNEY", "محامٍ أول", 4, "مباشرة التقاضي الرئيسي البارز، قيادة استراتيجيات الدفاع المعقدة، وتوجيه الممارسين الصغار في المكتب.", "خبرة مهنية ممتدة، محفظة تقاضٍ معقدة، تقييمات عالية، وشهادة نقابة متقدمة."],
  ["Legal Defense — Advocacy", "CHIEF ATTORNEY", "رئيس المحامين", 5, "قيادة عمليات المحاماة، إرساء معايير الدفاع المؤسسي، وتمثيل النخبة العليا من ممارسي القانون في الوزارة.", "سجل مهني استثنائي، ثقة قيادية تنفيذية، اختبار مجلس شامل، وموافقة نهائية من المجلس الأعلى."],

  // Legal Defense — State Litigation
  ["Legal Defense — State Litigation", "TRAINEE STATE ATTORNEY", "محامي دولة متدرب", 1, "دعم فرق تقاضي الدولة، مراجعة العقود الحكومية، والمساعدة في إعداد وثائق الدفاع عن ممتلكات وأموال الدولة.", "إتمام تدريب قانون الدولة، قضايا دولة بإشراف، وتقييم السلوك والأخلاقيات."],
  ["Legal Defense — State Litigation", "STATE ATTORNEY", "محامي دولة", 2, "تمثيل مصالح الدولة ومؤسساتها في النزاعات المدنية الروتينية، مطالبات الزكاة والضرائب، وقضايا المسؤولية الحكومية.", "فترة خدمة مطلوبة، الدفاع الناجح عن ممتلكات وقضايا الدولة، تدريب قانوني إلزامي، وتقييم إيجابي."],
  ["Legal Defense — State Litigation", "SENIOR STATE ATTORNEY", "محامي دولة أول", 3, "إدارة تقاضي الدولة متعدد الأطراف والمعقد، صياغة مراجعات التشريعات الحكومية، والإشراف على محامي الدولة الصغار.", "خبرة مؤسسية ممتدة، إدارة قضايا معقدة، تدريب قانون دولة متقدم، وتقييم تشغيلي عالٍ."],
  ["Legal Defense — State Litigation", "CHIEF STATE ATTORNEY", "رئيس محامي الدولة", 4, "قيادة عمليات قضايا الدولة، حماية السيادة القانونية في النزاعات الكبرى، ووضع معايير التمثيل المؤسسي الرسمي.", "قدرة قيادية مثبتة، سجل تقاضٍ استثنائي، اختبار مجلس شامل، واعتماد تنفيذي رسمي."],

  // Legal Consultancy
  ["Legal Consultancy", "LEGAL CONSULTANT", "مستشار قانوني", 1, "تقديم التحليلات القانونية المصرح بها، صياغة العقود الرسمية للشركات أو القطاعات، وتقديم الآراء الاستشارية المنظمة.", "خدمة قانونية موثقة، سجل أبحاث قانونية واسع، تدريب استشارات إلزامي، وتقييم مهني إيجابي."],
  ["Legal Consultancy", "SENIOR LEGAL CONSULTANT", "مستشار قانوني أول", 2, "تقديم التحليلات الاستراتيجية القانونية الرفيعة، مراجعة الاتفاقيات المؤسسية المعقدة، وتدقيق السياسات التنظيمية للجهات.", "خبرة استشارية ممتدة، محفظة استشارية معقدة، شهادة مهنية متقدمة، وتقييم عالٍ."],
  ["Legal Consultancy", "CHIEF LEGAL CONSULTANT", "رئيس المستشارين القانونيين", 3, "قيادة قطاع الاستشارات القانونية، الإشراف على معايير الاستشارات العليا، وتقديم المشورة المباشرة للقيادة التنفيذية.", "مسيرة استشارية استثنائية، اعتراف القيادة التنفيذية، اختبار مجلس صارم، وموافقة مجلس أعلى."]
];

const sectorSelect=document.getElementById("sector"), starSelect=document.getElementById("stars");
[...new Set(ranks.map(r=>r[0]))].forEach(s=>sectorSelect.innerHTML+=`<option value="${s}">${s}</option>`);
[...new Set(ranks.map(r=>r[3]))].sort().forEach(s=>starSelect.innerHTML+=`<option value="${s}">${s} Stars</option>`);
document.getElementById("rankCount").textContent=ranks.length;

function render(){
 const q=document.getElementById("search").value.toLowerCase(), sec=sectorSelect.value, st=starSelect.value;
 const filtered=ranks.filter(r=>(!q||r.join(" ").toLowerCase().includes(q))&&(!sec||r[0]===sec)&&(!st||String(r[3])===st));
 document.getElementById("resultCount").textContent=`${filtered.length} Ranks Listed`;
 const groups={}; filtered.forEach(r=>(groups[r[0]]??=[]).push(r));
 const box=document.getElementById("groups"); box.innerHTML="";
 let i=0;



 for(const [group,items] of Object.entries(groups)){
  const g=document.createElement("div"); g.className="group";
  g.innerHTML=`<div class="group-title"><h3>${group}</h3><span>${items.length} Ranks</span></div>`;
 items.forEach(r=>{i++;g.innerHTML+=`<div class="rank">
    <div class="rank-main-side">
      <div class="num">${String(i).padStart(2,"0")}</div>
      <div>
        <h4>${r[1]}</h4>
        <div class="internal" style="display: block; margin-top: 4px;">${r[2]}</div>
      </div>
      <div class="stars">${"★".repeat(r[3])}<span style="opacity:.18">${"★".repeat(5-r[3])}</span></div>
    </div>
    <div class="rank-details-side">
      <div class="role">${r[4]}</div>
      <div class="req"><strong>متطلبات الترقية</strong>${r[5]}</div>
    </div>
  </div>`});
  box.appendChild(g);
 }


 if(!filtered.length) box.innerHTML='<div class="empty">No matching ranks found in the official registry.</div>';
}
function openAudit(){location.href="audit.html"} render();


const canvas = document.getElementById('luxuryCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

for (let i = 0; i < 40; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5 + 0.5,
    speedX: (Math.random() - 0.5) * 0.2,
    speedY: (Math.random() - 0.5) * 0.2,
    alpha: Math.random() * 0.5 + 0.2
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.x += p.speedX;
    p.y += p.speedY;
    if (p.x < 0) p.x = canvas.width;
    if (p.x > canvas.width) p.x = 0;
    if (p.y < 0) p.y = canvas.height;
    if (p.y > canvas.height) p.y = 0;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(197, 165, 107, ${p.alpha})`;
    ctx.shadowBlur = 8;
    ctx.shadowColor = '#c5a56b';
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();
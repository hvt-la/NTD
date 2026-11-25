const priceItems = [
  [1,'Di dời + sạc gas máy lạnh treo tường','Reetech / Daikin','1.5–2 HP, 1 pha','Bộ',650000,'move'],
  [2,'Di dời + sạc gas máy lạnh treo tường','Reetech / Casper / Daikin','2.5 HP, 1 pha','Bộ',780000,'move'],
  [3,'Di dời + sạc gas máy lạnh tủ đứng','Reetech','3 HP, 1 pha','Bộ',950000,'move'],
  [4,'Di dời + sạc gas máy lạnh tủ đứng','Reetech / LG','5 HP, 3 pha','Bộ',1400000,'move'],
  [5,'Di dời + sạc gas máy lạnh cassette âm trần','Reetech / Aikibi','3 HP, 1 pha','Bộ',1350000,'move'],
  [6,'Di dời + sạc gas máy lạnh cassette âm trần','Reetech / Aikibi','4 HP, 3 pha','Bộ',1500000,'move'],
  [7,'Di dời + sạc gas máy lạnh cassette âm trần','Hisense / Aikibi','5 HP, 3 pha','Bộ',1700000,'move'],
  [8,'Di dời + sạc gas máy lạnh cassette âm trần','Hisense / Aikibi','5.5 HP, 3 pha','Bộ',1850000,'move'],
  [9,'Di dời + sạc gas máy lạnh áp trần','Aikibi','7 HP, 3 pha','Bộ',2100000,'move'],
  [10,'Thay mới quạt dàn lạnh DC','Hisense / Reetech','1–2 HP','Cái',1300000,'parts'],
  [11,'Thay mới quạt dàn lạnh AC','Hisense / Reetech','1–2 HP','Cái',1300000,'parts'],
  [12,'Thay block mới 100%','Toshiba','1.0 HP, 1 pha','Cái',3200000,'parts'],
  [13,'Thay block mới 100%','Toshiba','1.5 HP, 1 pha','Cái',3500000,'parts'],
  [14,'Thay block mới 100%','Toshiba','2.0 HP, 1 pha','Cái',4200000,'parts'],
  [15,'Thay block mới 100%','Toshiba','2.5 HP, 1 pha','Cái',5700000,'parts'],
  [16,'Thay block mới 100%','Toshiba','3 HP, 1 pha','Cái',7000000,'parts'],
  [17,'Thay block mới 100%','Toshiba','3.5 HP, 1 pha','Cái',7500000,'parts'],
  [18,'Thay block mới 100%','Panasonic','5 HP, 3 pha','Cái',12000000,'parts'],
  [19,'Thay block mới 100%','Panasonic','5.5 HP, 3 pha','Cái',13000000,'parts'],
  [20,'Thay block mới 100%','Panasonic','7 HP, 3 pha','Cái',16500000,'parts'],
  [21,'Thay block mới 100%','Panasonic','7.5 HP, 3 pha','Cái',17500000,'parts'],
  [22,'Xử lý, bơm lại gas máy bị xì','R22','1.0 HP','Bộ',850000,'gas'],
  [23,'Xử lý, bơm lại gas máy bị xì','R22','1.5 HP','Bộ',1050000,'gas'],
  [24,'Xử lý, bơm lại gas máy bị xì','R22','2–2.5 HP','Bộ',1500000,'gas'],
  [25,'Xử lý, bơm lại gas máy bị xì','R22','3 HP','Bộ',1850000,'gas'],
  [26,'Xử lý, bơm lại gas máy bị xì','R22','5–5.5 HP','Bộ',2250000,'gas'],
  [27,'Xử lý, bơm lại gas máy bị xì','R22','7 HP','Bộ',2550000,'gas'],
  [28,'Xử lý, bơm lại gas máy bị xì','R410','1.5 HP','Bộ',1050000,'gas'],
  [29,'Xử lý, bơm lại gas máy bị xì','R410','2–2.5 HP','Bộ',1400000,'gas'],
  [30,'Xử lý, bơm lại gas máy bị xì','R410','3 HP','Bộ',1700000,'gas'],
  [31,'Xử lý, bơm lại gas máy bị xì','R410','5–5.5 HP','Bộ',2100000,'gas'],
  [32,'Xử lý, bơm lại gas máy bị xì','R32','1.5 HP','Bộ',1050000,'gas'],
  [33,'Xử lý, bơm lại gas máy bị xì','R32','2–2.5 HP','Bộ',1400000,'gas'],
  [34,'Xử lý, bơm lại gas máy bị xì','R32','3 HP','Bộ',1700000,'gas'],
  [35,'Xử lý, bơm lại gas máy bị xì','R32','5–5.5 HP','Bộ',2150000,'gas'],
  [36,'Ống đồng dẫn gas máy lạnh','Hailiang Copper','7 dem / 6–10','Mét',220000,'gas'],
  [37,'Ống đồng dẫn gas máy lạnh','Hailiang Copper','7 dem / 6–12 (6–16)','Mét',250000,'gas'],
  [38,'Ống đồng dẫn gas máy lạnh','Hailiang Copper','7 dem / 10–16','Mét',350000,'gas'],
  [39,'Ống đồng dẫn gas máy lạnh','Hailiang Copper','7 dem / 10–19','Mét',450000,'gas'],
  [40,'Nạp thêm gas máy lạnh','R22','1–2 HP','Bộ',100000,'gas'],
  [41,'Nạp thêm gas máy lạnh','R22','2.5 HP','Bộ',200000,'gas'],
  [42,'Nạp thêm gas máy lạnh','R22','5 HP','Bộ',300000,'gas'],
  [43,'Nạp thêm gas máy lạnh','R22','7 HP','Bộ',400000,'gas'],
  [44,'Sửa board máy lạnh Mono','Reetech','1.5 HP','Bộ',550000,'board'],
  [45,'Sửa board máy lạnh Mono','Reetech','2–2.5 HP','Bộ',650000,'board'],
  [46,'Sửa board máy lạnh Mono','Reetech','3 HP','Bộ',750000,'board'],
  [47,'Sửa board máy lạnh Mono','Reetech','5–5.5 HP','Bộ',850000,'board'],
  [48,'Sửa board máy áp trần Mono','Aikibi','7 HP','Bộ',950000,'board'],
  [49,'Sửa board máy lạnh Inverter','Hisense / Reetech','1.5 HP','Bộ',1200000,'board'],
  [50,'Sửa board máy lạnh Inverter','Hisense / Reetech','2–2.5 HP','Bộ',1350000,'board'],
  [51,'Sửa board máy lạnh Inverter','Hisense / Reetech','3 HP','Bộ',1500000,'board'],
  [52,'Sửa board máy lạnh Inverter','Hisense / Reetech','5–5.5 HP','Bộ',1950000,'board'],
  [53,'Tháo lắp, vệ sinh, châm thêm gas máy treo tường','Hisense','1.5–2.5 HP','Bộ',600000,'clean'],
  [54,'Vệ sinh máy lạnh tủ đứng / cassette / áp trần','Reetech / Aikibi','5 HP','Bộ',550000,'clean'],
  [55,'Vệ sinh máy lạnh tủ đứng / cassette / áp trần','Reetech / Aikibi','5.5 HP','Bộ',550000,'clean'],
  [56,'Vệ sinh máy lạnh tủ đứng / cassette / áp trần','Reetech / Aikibi','7 HP','Bộ',550000,'clean'],
  [57,'Vệ sinh dàn lạnh hệ thống VRF (giấu trần ống gió)','Hisense','5 HP','Cái',900000,'clean'],
  [58,'Vệ sinh dàn nóng hệ thống VRF','Hisense','10 HP','Cái',500000,'clean'],
  [59,'Dây điện Cadivi (dây đơn)','Cadivi','1.5 mm²','Mét',12000,'materials'],
  [60,'Dây điện Cadivi (dây đơn)','Cadivi','2.5 mm²','Mét',15000,'materials'],
  [61,'Dây điện Cadivi (dây đơn)','Cadivi','4 mm²','Mét',25000,'materials'],
  [62,'Ống nước mềm','Việt Nam','Phi 20','Mét',5000,'materials'],
  [63,'Thay tấm giấy Cooling pad máy 18.000','Việt Nam','690 × 770 × 100 mm','Tấm',625000,'materials'],
  [64,'Thay tấm giấy Cooling pad máy 23.000','Việt Nam','930 × 770 × 100 mm','Tấm',875000,'materials'],
  [65,'Thay tấm giấy Cooling pad máy 30.000','Việt Nam','930 × 770 × 100 mm','Tấm',1125000,'materials'],
  [66,'Thay tấm giấy Cooling pad máy 36.000','Việt Nam','900 × 940 × 100 mm','Tấm',1450000,'materials'],
  [67,'Nhân công thay thế tấm giấy Cooling pad','—','—','Tấm',200000,'materials']
];

const rows = document.getElementById('priceRows');
const search = document.getElementById('priceSearch');
const filter = document.getElementById('priceFilter');
const count = document.getElementById('resultCount');
const money = value => new Intl.NumberFormat('vi-VN').format(value);
function renderPrices(){
  const q = (search.value || '').trim().toLocaleLowerCase('vi');
  const group = filter.value;
  const found = priceItems.filter(item => {
    const text = item.slice(0,5).join(' ').toLocaleLowerCase('vi');
    return (group === 'all' || item[6] === group) && (!q || text.includes(q));
  });
  rows.innerHTML = found.map(item => `<tr><td>${item[0]}</td><td>${item[1]}<small class="brand-hint">${item[2]}</small></td><td>${item[3]}</td><td>${item[4]}</td><td class="numeric">${money(item[5])}</td></tr>`).join('');
  count.textContent = `Đang hiển thị ${found.length} / ${priceItems.length} hạng mục`;
  if(!found.length) rows.innerHTML = '<tr><td colspan="5" class="empty-row">Không tìm thấy hạng mục phù hợp.</td></tr>';
}
search.addEventListener('input', renderPrices);
filter.addEventListener('change', renderPrices);
document.getElementById('clearFilter').addEventListener('click', () => {search.value='';filter.value='all';renderPrices();});
renderPrices();

const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('open'); menuToggle.setAttribute('aria-expanded','false');
}));

document.getElementById('contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const body = [
    'YÊU CẦU TƯ VẤN DỊCH VỤ - CÔNG TY TNHH NGUYÊN THANH ĐẠT',
    `Họ và tên: ${data.get('name')}`,
    `Số điện thoại: ${data.get('phone')}`,
    `Đơn vị / địa điểm: ${data.get('company') || 'Chưa cung cấp'}`,
    `Dịch vụ: ${data.get('service')}`,
    `Nội dung: ${data.get('message') || 'Không có'}`
  ].join('\n');
  document.getElementById('formNote').textContent = 'Đang mở ứng dụng email. Vui lòng kiểm tra và nhấn Gửi để hoàn tất.';
  window.location.href = `mailto:hoangnguyen15101993@gmail.com?subject=${encodeURIComponent('Yêu cầu tư vấn dịch vụ điện lạnh')}&body=${encodeURIComponent(body)}`;
});

document.getElementById('year').textContent = new Date().getFullYear();
const back = document.getElementById('backToTop');
window.addEventListener('scroll', () => back.classList.toggle('show', window.scrollY > 500));
back.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));

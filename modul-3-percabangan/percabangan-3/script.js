const d = new Date(2023, 2, 10, 16, 0, 0);
const month = d.getMonth();
const hour = d.getHours();
console.log(d);
console.log(month);

switch (month) {
  case 1:
    console.log('January');
    break;
  case 2:
    console.log('February');
    break;
  case 3:
    console.log('Maret');
    break;
  default:
    console.log('Bukan Jan, Feb atau Mar');
}


switch (true) {
  case hour < 12:
    console.log('Selamat Pagi');
    break;
  case hour < 18:
    console.log('Selamat Sore');
    break;
  default:
    console.log('Selamat Malam');
}

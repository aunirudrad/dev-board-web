const date = new Date;


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const day = days[date.getDay()];
const todayDate = date.getDate();
const month = months[date.getMonth()];
const year = date.getFullYear();

// console.log(day, todayDate, month, year);

document.getElementById('today').innerText = `${day},`;
document.getElementById('dd-mm-yyyy').innerText = `${todayDate} ${month} ${year}`;
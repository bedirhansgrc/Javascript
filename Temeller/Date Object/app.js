let value;


const now = new Date(); //Şu anki zamanı almamızı sağlar


const date1 = new Date("18-01-2001 09:30:00");

const date2 = new Date("18 January 2001");

const date3 = new Date("01/18/2001");

value = date2.getMonth();
value = date2.getDate()
value = date2.getDay()

console.log(value);














let value;
//veritiplerini stringe cevirme

value = String(123);
value = String(3.14);
value = String(true);
value = String(false);
value = String(function(){console.log()});

value = (10).toString();
value = (3.14).toString();


//veritiplerini sayılara cevirme
value = Number("123");
value = Number(null);
value = Number("hello world");
value = Number(function(){console.log()});

console.log(value);
console.log(typeof value);

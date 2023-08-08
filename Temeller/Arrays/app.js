let value;

const numbers = [43,53,33,23,44,35,5];

//const numbers2 = new Array(1,2,3,4,5,6,7);

const langs = ["Python", "Java", "C++", " Javascript"];

const a = ["Merhaba", 22 ,null, undefined,3,14];

value = numbers.length;

value= numbers [0];
value= numbers [2];
value= numbers [numbers.length-1];


//Herhangi bir indexteki değerini değiştirme


numbers[2] = 1000;

value = numbers[2];

//Index of

value = numbers.indexOf(1000);


//Arrayin Sonuna Değer Ekleme - push

numbers.push(2000);

value = numbers;
//Başına Değer Ekleme
numbers.unshift(3000);

//Sonundan Değer Atma 

numbers.pop();

value= numbers;

//Başından Değer Atma

numbers.shift()

value= numbers;

//Belli Bir Kısmını Atma

numbers.splice(0,3);

value= numbers;

//Reverse

numbers.reverse()

value= numbers;

//Sıralama

value= numbers.sort()



value= numbers.sort(function(x,y){ //Küçükten Büyüğe
    return x-y
})

value= numbers.sort(function(x,y){ //Büyükten Büyüğe
    return y-x
})

console.log(value);
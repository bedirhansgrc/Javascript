let value;

const programmer = {
    name : "Bedirhan Sığırcı",
    age : 22,
    email : "bedirhansigirci@gmail.com",
    langs : ["Python ", "Java", "Javascript"],

    adress : {
        city : "Adana",
        street : "Toros Mah."
    },

    work : function(){
        console.log("Programcı Calisiyor...")
    }
}


value= programmer;


value = programmer.email

value = programmer.langs

value =programmer.adress.city

programmer.work()

const programmers = [
    {name : "Bedirhan Sığırcı", age:22},
    {name : "Yiğit", age : 25}
];

value= programmers[1].name;

console.log(value)
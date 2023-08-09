//Fonksiyon tanımlama

// function merhaba(name ="Bilgi Yok", age ="Bilgi Yok") {
    // if(typeof name === "undefined") name = "Bilgi Yok";

    // if(typeof age === "undefined") age = "Bilgi yok"

//     console.log(`Ìsim : ${name} Yaş: ${age}`);
// }

// merhaba("Bedo", 22); //Function Call


// merhaba();

// merhaba("Bedo")


                               //Return

// function square(x){
//     return x*x;
// }
// function cube(x){
//     return x*x*x;
// }

// let a = cube(square(12));
// console.log(a);

// Function Expression

// const merhaba = function(name){
//     console.log("Merhaba " + name);
// }

// merhaba("Bedo")

//Immediately Invoked Function Expression (IIFE)



// (function(name){
//     console.log("merhaba "+ name);
// })("bedo")


const database = {
    host: "Localhost",
    add: function(){
        console.log("Eklendi");
    },
    get:function(){
        console.log("Elde Edildi");
    },
    update:function(id){
        console.log(`Id: ${id} Guncellendi`);
    },
    delete:function(id){
        console.log(`Id: ${id} Silindi`);
    }
}

console.log(database.host);

database.get()
database.update(55)

database.delete (10)


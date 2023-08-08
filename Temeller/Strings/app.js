let value;

const firstName ="Louis";
const lastName = "Lane";

const langs = "Java,Python,C++";

value = firstName + lastName;

value = firstName + " " + lastName;

value = "Mustafa Murat ";
value += "Coşkun";

value = firstName.length;

value = firstName.concat(" ",lastName," ","Caz");

value = firstName.toLowerCase();

value = firstName.toUpperCase();


value = firstName[0];
value = firstName[2];
value = firstName[4];
value = firstName[firstName.length - 1];


//Index Of

value = firstName.indexOf("u");

//Char At

value = firstName.charAt(0);


//Split

value = langs.split(",");


//Replace

value = langs.replace("Python" ,"CSS");


//Includes

value = langs.includes("Java");
value = langs.includes("CSS");


console.log(value);
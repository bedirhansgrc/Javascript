const name = "Bedirhan Sığırcı";
const department = "Bilişim"
const salary = 69000;

//const a = "İsim : " + name + "\n" + "Departman : " + department + "\n" + "Maaş : " + salary;



//const a = `İsim: ${name}\nDepartman: ${department}\nMaaş: ${salary}`;

// const html = "<ul>" +
//              "<li>" + name + "</li>" +
//              "<li>" + department + "</li>" +
//              "<li>" + salary + "</li>" +
//              "</ul>";
function a(){
    return "Merhaba";
}

const html = `
    <ul>
    <li>${name}</li>
    <li>${department}</li>
    <li>${salary}</li>
    <li>${a()}</li>
    </ul>
    `



document.body.innerHTML = html;               
console.log(a);
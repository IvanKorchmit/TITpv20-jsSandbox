console.log("Hello World");
// Declare a variable
let name = `Harry Potter`
let age = 18;
let survived = true;
let city = "London";
let commentary = "";
let drivingLicense = "";
if (survived) {
    commentary = "he won the battle for the Hogwartz";
}
else {
    commentary = "no he did not win the battle for the Hogwartz";
}
// console.log("Name: " + name + " Age " + age  + " City " + city);
console.log(`Character: ${name}. Age ${age}. City ${city}`);
console.log(`Character: ${name}. Status: ${commentary}.`);
if (age >= 18) {
    drivingLicense = "He can drive";
}
else {
    drivingLicense = "He cannot drive";
}

console.log(drivingLicense);

const html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>City: ${city}</li>
        <li>City: ${city}</li>
        <li>${commentary}</li>
        <li>${drivingLicense}</li>
        

    </ul>
`;
document.body.innerHTML = html;
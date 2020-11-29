const person = {
    name: "Bob",
    age: "20",
    address: {
        city: "chongqing",
        area: "Nanan"
    }
}

let [a, b, c, d] = [person.name, person.age, person.address.city, person.address.area];
console.log(a);
console.log(b);
console.log(c);
console.log(d);
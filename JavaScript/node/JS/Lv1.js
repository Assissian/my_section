let a = 1;
let b = 0;
let i = 1;

while (a <= 1000 && b <= 1000) {
    a = a + b;
    b = b + a;
    console.log(a, b);
    i++;
}
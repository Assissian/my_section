let arr1 = [
    [1, 2], 3, [4, [5, [6]], 7]
];

function even(item) {
    return [].concat(...item.map(x => Array.isArray(x) ? even(x) : x))
}

let arr2 = even(arr1);

console.log(arr2)
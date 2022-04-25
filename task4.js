const getArray = (array) => {
    if (!Array.isArray(array)) {
        return "You need to enter an array";
    }
    return array.flat(Infinity);
}
let array = [1, 2, [3, 4, [5, 6]]];
console.log(getArray(array));
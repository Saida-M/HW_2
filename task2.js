const getArrayLength = (array, startOrEnd, value) => {
    if (!Array.isArray(array) || startOrEnd !== "start" && startOrEnd !== "end" || !value) {
        return "You need to enter an array as first parameter, second - start or end, third - any value ";
    }
    if (startOrEnd == "start") {
        array.splice(0, 0, value);
        return array.flat().length;
    } else if (startOrEnd == "end") {
        array.splice(array.length, 0, value);
        return array.flat().length;
    }
}
let array = [15, 5, 30, 100];
//let value = [33, 44];
console.log(getArrayLength(array, "start", 10));
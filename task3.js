const getDeletedElement = (array, startOrEnd) => {
    if (!Array.isArray(array) || startOrEnd !== "start" && startOrEnd !== "end") {
        return "You need to enter an array as first parameter, second - start or end";
    }
    if (startOrEnd == "start") {
        let delElement = array.splice(0, 1);
        return delElement;
    } else if (startOrEnd == "end") {
        let delElement = array.splice(array.length - 1, 1);
        return delElement;
    }
}
let array = [5, 7, 9, 11, 13, 15];
console.log(getDeletedElement(array, "end"));
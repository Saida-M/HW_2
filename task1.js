let array = [{
    "id": 1,
    "name": "Elliot Laroze",
    "salary": 604,
    "age": 46,
    toString() {
        return "Elliot Laroze";
    }
}, {
    "id": 2,
    "name": "Tibold Strickland",
    "salary": 575,
    "age": 34,
    toString() {
        return "Tibold Strickland";
    }
}, {
    "id": 3,
    "name": "Aldon Kenafaque",
    "salary": 816,
    "age": 32,
    toString() {
        return "Aldon Kenafaque";
    }
}, {
    "id": 4,
    "name": "Danice O'Sirin",
    "salary": 107,
    "age": 50,
    toString() {
        return "Danice O'Sirin";
    }
}, {
    "id": 5,
    "name": "Axe Lofthouse",
    "salary": 541,
    "age": 51,
    toString() {
        return "Axe Lofthouse";
    }
}, {
    "id": 6,
    "name": "Adelice Emberton",
    "salary": 702,
    "age": 46,
    toString() {
        return "Adelice Emberton";
    }
}, {
    "id": 7,
    "name": "Shannen Speir",
    "salary": 525,
    "age": 50,
    toString() {
        return "Shannen Speir";
    }
}, {
    "id": 8,
    "name": "Albert Betke",
    "salary": 113,
    "age": 26,
    toString() {
        return "Albert Betke";
    }
}, {
    "id": 9,
    "name": "Terese Mawer",
    "salary": 721,
    "age": 42,
    toString() {
        return "Terese Mawer";
    }
}, {
    "id": 10,
    "name": "Emmerich Rodge",
    "salary": 625,
    "age": 29,
    toString() {
        return "Emmerich Rodge";
    }
}];
const getAverageSalary = (array) => {
    if (!Array.isArray(array)) {
        return "You need to enter an array";
    }
    let sumSalary = array.reduce((total, array) => { return total + array.salary }, 0);
    let averageSalary = sumSalary / array.length;
    return averageSalary;
}
//console.log(getAverageSalary(array));
const getNamedArray = (array) => {
    if (!Array.isArray(array)) {
        return "You need to enter an array";
    }
    array = array.map(person => { return { ...person, name: "Front End Camp Employee - " + person.name } });
    return array;
}
//console.log(getNamedArray(array));
const getYoungerEmployee = (array) => {
    if (!Array.isArray(array)) {
        return "You need to enter an array";
    }
    array = array.filter(person => person.age < 30);
    return array;
}
//console.log(getYoungerEmployee(array));
const getInfo = (array, name) => {
    if (!Array.isArray(array) || typeof name !== "string") {
        return "You need to enter an array as first parameter, second - employee name";
    }
    let employee = array.find(person => person.name === name);
    if (employee) {
        return employee;
    } else {
        return "Not found";
    }
}
//console.log(getInfo(array, "Terese Mawer"));
const getEmployeesNames = (array) => {
    if (!Array.isArray(array)) {
        return "You need to enter an array";
    }
    let list = array.join(',');
    return "Our employees list is: " + list;
}
//console.log(getEmployeesNames(array));
const getSortedInfo = (array, label) => {
    if (!Array.isArray(array) || label !== "age" && label !== "salary") {
        return "You need to enter an array as first parameter, second - age or salary";
    }
    if (label == "salary") {
        return array = array.sort((a, b) => (a.salary > b.salary) ? 1 : -1);
    } else if (label == "age") {
        return array = array.sort((a, b) => (a.age > b.age) ? 1 : -1);
    }
}
//console.log(getSortedInfo(array, "salary"));
//console.log(array);
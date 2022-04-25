const a = {
    name: 'Samir',
    address: {
        country: 'Azerbaijan',
        city: {
            name: 'Baku'
        }
    }
};
const b = JSON.parse(JSON.stringify(a));
b.address.city.name = 'Qebele';
console.log('a', a);
console.log('b', b);
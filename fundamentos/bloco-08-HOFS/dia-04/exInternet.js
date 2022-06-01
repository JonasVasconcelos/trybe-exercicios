let countries = [
{ id: 1, name: "india" },
{ id: 2, name: "canada" },
{ id: 3, name: "america" }
];
const transformed = countries.map(({ id, name }) => ({
label: id,
value: name
}));
console.log(JSON.stringify(transformed))
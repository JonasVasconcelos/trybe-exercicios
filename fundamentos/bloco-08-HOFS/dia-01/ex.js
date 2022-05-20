const newUser = (id, name, email) => {
  return {
    id: id,
    name: name,
    email: email,
  };
};

console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

const getPosition = (latitude, longitude) => {
  return {
    latitude,
    longitude
  };
}

console.log(getPosition(-19.8157, -43.9542));


const multiply = (number, value = 1) => {
  return number * value;
};

console.log(multiply(8));
const array = [1, 2, 3, 4, 5, 6, 7, 78, 89];

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    console.log(`Number ${array[i]} is even`);
  } else {
    console.log(`Number ${array[i]} is odd`);
  }
}

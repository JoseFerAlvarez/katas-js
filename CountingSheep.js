/* Consider an array/list of sheep where some sheep may be missing from their place.
We need a function that counts the number of sheep present in the array (true means present). */

const sheeps = [true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true];

let number = 0;

sheeps.forEach((sheep) => {
    if (sheep) {
        number++;
    }
});

console.log(`There are ${number} sheeps in total`);

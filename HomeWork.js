function filterNumbers(arr, value) {
    return arr.filter(number => number > value);
}


const numbers = [1, 2, 5, 7, 10, 3];
const filteredNumbers = filterNumbers(numbers, 4);
console.log(filteredNumbers);
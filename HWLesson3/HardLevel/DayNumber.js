const currentDayElement = document.querySelector('.day-number.current-number');

if (currentDayElement) {
    console.log(`Today: ${currentDayElement.textContent.trim()} December 2024`);
} else {
    console.log('Element with class day-number current-number not found.');
}


const currentDayNum = document.querySelector('.day-number.current-number')?.textContent.trim() ||'Unknown number';
console.log('Current number ${currentDayNum}');
const prevButton = document.querySelector('.arrow-previous');
const nextButton = document.querySelector('.arrow-next');

if (prevButton && nextButton) {
    console.log('Previous button image:', prevButton.src || 'No image');
    console.log('Next button image:', nextButton.src || 'No image');
} else {
    console.log('One or both navigation buttons are missing!');
}




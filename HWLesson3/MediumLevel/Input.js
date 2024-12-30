const inputFields = document.querySelectorAll('input');

if (inputFields.length > 0) {
    inputFields.forEach((input, index) => {
        console.log(`Input Field ${index + 1}: Type = ${input.type}, Placeholder = ${input.placeholder || 'No placeholder'}`);
    });
} else {
    console.log('No input fields found on the page.');
}

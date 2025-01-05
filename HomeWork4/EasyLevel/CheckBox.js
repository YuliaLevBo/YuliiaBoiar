const potentialCheckboxes = document.querySelectorAll("[role='checkbox'], [type='checkbox'], [class*='checkbox']");
console.log(`Found ${potentialCheckboxes.length} potential checkboxes.`);
potentialCheckboxes.forEach(cb => console.log(cb));

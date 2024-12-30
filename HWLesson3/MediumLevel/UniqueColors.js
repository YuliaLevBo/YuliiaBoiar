const uniquecolors = new Set();
document.querySelectorAll('*').forEach(element =>{
    const style = getComputedStyle(element);
    colors.add(style.color);
    colors.add(style.backgroundColor);

});

console.log(`Total unique color ${color.size}`);
console.log(uniquecolors);
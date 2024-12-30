const allimages = document.querySelectorAll('*');
let count = 0;
allimages.forEach(img =>{
    if (img.height > 300){
        console.log(img)
        count ++;
    }
})
console.log('Total count $ (count)');
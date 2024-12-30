const iconImages = Array.from(document.querySelectorAll('img')).filter(img => img.width < 50 && img.height < 50);
console.log(iconImages);

document.querySelectorAll('img[alt*="icon"], img[class*="icon"]')

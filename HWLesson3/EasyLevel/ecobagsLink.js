const mapLink = document.querySelector('a[href="#/places"]');
console.log(mapLink);

console.log($$('a').filter(link => link.getAttribute('href') === '#/places'));
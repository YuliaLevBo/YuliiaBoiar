const searchIcon = document.evaluate("//img[contains(@class, 'search-icon') or contains(@alt, 'search')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
if (searchIcon) {
    console.log('Search icon found.');
    console.log(`Alt: ${searchIcon.alt}, Src: ${searchIcon.src}`);
} else {
    console.log('Search icon not found.');
}

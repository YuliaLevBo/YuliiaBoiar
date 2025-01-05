let searchIcon = $x("//img[contains(@alt, 'search')]");
if (searchIcon.length > 0) {
    let icon = searchIcon[0];
    console.log("Search icon found. Alt text:", icon.getAttribute("alt"));
    console.log("Image source (src):", icon.getAttribute("src"));
} else {
    console.log("Search icon not found.");
}

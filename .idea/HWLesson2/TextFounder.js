function checkTextPresence(text) {
    const bodyText = document.body.innerText;
    return bodyText.includes(text);
}


if (checkTextPresence("JavaScript")) {
    console.log("Text found!");
} else {
    console.log("Text not found!");
}


const langSwitcher = document.evaluate(
    "//img[@alt='language switcher' or contains(@class, 'header_arrow') or contains(@src, 'arrow_down.svg')]",
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
).singleNodeValue;


if (langSwitcher) {
    console.log(" Language switcher element detected:", langSwitcher);

    const currentLang = document.querySelector('html').getAttribute('lang') || 'Unknown';
    console.log(` Current language: ${currentLang}`);

    langSwitcher.click();
    console.log(" Clicked on the language switcher.");


    setTimeout(() => {
        const newLang = document.querySelector('html').getAttribute('lang') || 'Unknown';
        if (currentLang !== newLang) {
            console.log(` Language changed successfully! Previous: ${currentLang}, New: ${newLang}`);
        } else {
            console.warn(` Language did not change. Still: ${newLang}`);
        }
    }, 2000);
} else {
    console.warn(" Language switcher element not found.");
}

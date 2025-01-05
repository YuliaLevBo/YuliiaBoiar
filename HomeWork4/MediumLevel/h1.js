const h1 = document.evaluate('//h1', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
console.log(h1);

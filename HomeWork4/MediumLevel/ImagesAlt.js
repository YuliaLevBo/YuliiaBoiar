const images = document.evaluate('//img[@alt]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
console.log(`Found ${images.snapshotLength} images with the alt attribute.`);

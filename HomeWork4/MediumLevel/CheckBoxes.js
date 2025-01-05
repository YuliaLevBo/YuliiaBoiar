const checkboxes = document.evaluate("//input[@type='checkbox']", document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
let checked = 0, unchecked = 0;

for (let i = 0; i < checkboxes.snapshotLength; i++) {
    if (checkboxes.snapshotItem(i).checked) {
        checked++;
    } else {
        unchecked++;
    }
}
console.log(`Checked: ${checked}, Unchecked: ${unchecked}`);

const button = document.evaluate("//button[contains(text(), 'Start forming a habit!')]", document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
if (button.snapshotLength > 0) {
    console.log(`Found ${button.snapshotLength} button(s) with the text "Start forming a habit!"`);
} else {
    console.log('No button with the text "Start forming a habit!" found.');
}

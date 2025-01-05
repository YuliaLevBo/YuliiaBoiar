let button = $x("//button[text()='Start forming a habit!']");
if (button.length > 0) {
    console.log(`Found ${button.length} button(s) with the text "Start forming a habit!".`);
} else {
    console.log("Button with text 'Start forming a habit!' not found.");
}

const socialButtons = document.querySelectorAll('a.footer_social-link');

socialButtons.forEach(button => {
    const img = button.querySelector('img');
    if (img && img.alt) {
        console.log(`Social Button: ${img.alt}, Link: ${button.href}`);
    } else {
        console.log(`Social Button: Unknown, Link: ${button.href}`);
    }
});


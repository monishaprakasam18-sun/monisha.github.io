// Typing Animation
const text = ["Final Year Law Student", "Litigation | Drafting | Research"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
    current = text[i];
    let display = document.querySelector(".typing");

    if (!isDeleting) {
        display.textContent = current.slice(0, j++);
        if (j > current.length) { isDeleting = true; }
    } else {
        display.textContent = current.slice(0, j--);
        if (j === 0) {
            isDeleting = false;
            i = (i + 1) % text.length;
        }
    }
    setTimeout(type, 120);
}
type();

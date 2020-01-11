const landingText = Array.from(document.querySelectorAll('.landing-text'));
// let timer;
let i = 0;

setInterval(() => {
    if (i < landingText.length) {
        landingText[i].classList.add('fade-in');
        i++
    } else {
        landingText.map((text) => text.classList.remove('fade-in'));
        i = 0;
    }
}, 1500);


// function fadeIn(x) {
//     x.classList.add('fade-in');
// }

// function fadeOut(x) {
//     x.classList.remove('fade-in');
// };

function fadeInText() {
    text.classList.add('fade-in');
    i++;
}
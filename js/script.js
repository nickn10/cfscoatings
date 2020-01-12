const landingText = Array.from(document.querySelectorAll('.landing-text'));
// let timer;
let i = 0;

landingImgsAnimation();
landingTxtAnimation();


// function fadeIn(x) {
//     x.classList.add('fade-in');
// }

// function fadeOut(x) {
//     x.classList.remove('fade-in');
// };

// function fadeInText() {
//     text.classList.add('fade-in');
//     i++;
// }

// ============= Landing Animations ===========

function landingImgsAnimation() {
    window.addEventListener("DOMContentLoaded", function (e) {

        const landing = document.getElementById("landing");
        const fadeComplete = function (e) { landing.appendChild(arr[0]); };
        const arr = landing.getElementsByTagName("img");
        for (var i = 0; i < arr.length; i++) {
            arr[i].addEventListener("animationend", fadeComplete, false);
        }

    }, false);
}

function landingTxtAnimation() {
setInterval(() => {
    if (i < landingText.length) {
        landingText[i].classList.add('fade-in');
        i++
    } else {
        landingText.map((text) => text.classList.remove('fade-in'));
        i = 0;
    }
}, 1100);
}

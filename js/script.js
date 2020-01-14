const landingText = Array.from(document.querySelectorAll('.landing-text'));
// let timer;
let i = 0;

// landingTxtAnimation();
startLandingSlide();

// ============= Landing Animations ===========

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

function startLandingSlide() {
    const landing = document.getElementById("landing");
    const arr = landing.getElementsByTagName("img");
    for (let i = 0; i < arr.length; i++) {
        arr[i].addEventListener("animationend", (e) => landing.appendChild(arr[0]), false);
    }
}

let coin = Number(localStorage.getItem("coin")) || 0;
let power = Number(localStorage.getItem("power")) || 1;

// Sahifa yuklanganda sonni ko'rsatish
window.onload = function() {
    document.getElementById("coin").innerText = coin;
};

function updateCoin() {
    document.getElementById("coin").innerText = coin;
    // XOTIRAGA SAQLASH
    localStorage.setItem("coin", coin);
    localStorage.setItem("power", power);
}

function tap(event) {
    coin += power;
    updateCoin();

    // EFFEKT YARATISH
    createClickEffect(event);
}

function createClickEffect(event) {
    const effect = document.createElement("div");
    effect.classList.add("click-animation");
    effect.innerText = "+" + power;

    // Bosilgan joyni aniqlash
    let x = event.clientX  (event.touches && event.touches[0].clientX)  window.innerWidth / 2;
    let y = event.clientY  (event.touches && event.touches[0].clientY)  window.innerHeight / 2;

    effect.style.left = x + "px";
    effect.style.top = y + "px";
    effect.style.position = "absolute"; // CSS da bo'lmasa, shu yerda bo'lgani ma'qul

    document.body.appendChild(effect);

    setTimeout(() => {
        effect.remove();
    }, 800);
}

function upgrade() {
    if (coin >= 10) {
        coin -= 10;
        power++;
        updateCoin();
    } else {
        alert("Coin yetarli emas!");
    }
}

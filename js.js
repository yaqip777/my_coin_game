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

function tap() {
    coin += power;
    updateCoin();
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

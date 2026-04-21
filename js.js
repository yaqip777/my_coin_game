let coin = Number(localStorage.getItem("coin")) || 0;
let power = Number(localStorage.getItem("power")) || 1;

// Sahifa yuklanganda darhol ekranga chiqarish
document.getElementById("coin").innerText = coin;

function updateCoin() {
    // Ekranni yangilash
    document.getElementById("coin").innerText = coin;
    // FAQAT shu yerda xotiraga saqlash kerak
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
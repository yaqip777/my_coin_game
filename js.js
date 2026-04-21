// 1. Eng tepada: Avval xotiradan ma'lumotni qidiramiz
let coin = Number(localStorage.getItem("coin")) || 0;
let power = Number(localStorage.getItem("power")) || 1;

// 2. Sahifa ochilishi bilan ekranda eski sonni ko'rsatamiz
window.onload = function() {
    document.getElementById("coin").innerText = coin;
};

function updateCoin() {
    // Ekranni yangilash
    document.getElementById("coin").innerText = coin;
    
    // 3. XOTIRAGA SAQLASH (Eng muhim joyi)
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

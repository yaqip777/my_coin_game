let coin = localStorage.getItem("coin") || 0;
let power = localStorage.getItem("power") || 1;

coin = Number(coin);
power = Number(power);

function updateCoin() {
    document.getElementById("coin").innerText = coin;
    localStorage.setItem("coin", coin);
    localStorage.setItem("power", power);
}

function tap() {
    coin += power;
    updateCoin();

    showPlus(power); // 🔥 faqat power chiqadi
}

function upgrade() {
    if (coin >= 10) {
        coin -= 10;
        power++;
        updateCoin();
    }
}

function showPlus(value) {
    let plus = document.createElement("div");
    plus.innerText = "+" + value;

    plus.style.position = "absolute";
    plus.style.color = "yellow";
    plus.style.fontSize = "20px";
    plus.style.left = "50%";
    plus.style.top = "60%";

    document.body.appendChild(plus);

    setTimeout(() => {
        plus.remove();
    }, 800);
}

updateCoin();

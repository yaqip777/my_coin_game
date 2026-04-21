let coin = localStorage.getItem("coin") || 0;
coin = Number(coin);

let power = localStorage.getItem("power") || 1;
power = Number(power);

// coin ko‘rsatish
function updateCoin() {
    document.getElementById("coin").innerText = coin;
    localStorage.setItem("coin", coin);
}

// bosganda coin qo‘shadi
function tap() {
    coin += power;
    updateCoin();

    // +effect
    let plus = document.createElement("div");
    plus.innerText = "+" + power;
    plus.style.position = "absolute";
    plus.style.color = "yellow";
    plus.style.left = "50%";
    plus.style.top = "50%";

    document.body.appendChild(plus);

    setTimeout(() => plus.remove(), 500);
}

// upgrade
function upgrade() {
    let cost = power * 10;

    if (coin >= cost) {
        coin -= cost;
        power++;
        localStorage.setItem("power", power);
        updateCoin();
    } else {
        alert("Coin yetarli emas!");
    }
}

// offline earning
let last = localStorage.getItem("last") || Date.now();
let now = Date.now();

let diff = Math.floor((now - last) / 1000);
coin += diff * power;

localStorage.setItem("last", now);

// start
updateCoin();

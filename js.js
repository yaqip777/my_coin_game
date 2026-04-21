let coin = localStorage.getItem("coin") || 0;
let power = localStorage.getItem("power") || 1;

coin = Number(coin);
power = Number(power);

function update() {
    document.getElementById("coin").innerText = coin;

    localStorage.setItem("coin", coin);
    localStorage.setItem("power", power);
}

function tap() {
    coin += power;
    update();
}

function upgrade() {
    let cost = power * 10;

    if (coin >= cost) {
        coin -= cost;
        power++;
        update();
    } else {
        alert("Coin yetarli emas!");
    }
}

document.getElementById("coinImg").onclick = tap;
document.getElementById("upgradeBtn").onclick = upgrade;

update();

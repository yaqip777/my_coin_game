let score = localStorage.getItem('myScore') ? parseInt(localStorage.getItem('myScore')) : 0;
let tapValue = localStorage.getItem('tapValue') ? parseInt(localStorage.getItem('tapValue')) : 1;
let upgradeCost = localStorage.getItem('upgradeCost') ? parseInt(localStorage.getItem('upgradeCost')) : 100;

document.getElementById('coin').innerText = score;
updateUpgradeButtonText();
checkLevel();
function tap(event) {
    score += tapValue;
    document.getElementById('coin').innerText = score;
    localStorage.setItem('myScore', score);
    checkLevel();
    createScoreEffect(event);
}

function createScoreEffect(event) {
    const effect = document.createElement('div');
    effect.innerText = '+' + tapValue;
    effect.className = 'score-animation';
    let x = event.touches ? event.touches[0].clientX : event.clientX;
    let y = event.touches ? event.touches[0].clientY : event.clientY;
    effect.style.left = x + 'px';
    effect.style.top = y + 'px';
    document.body.appendChild(effect);
    setTimeout(() => { effect.remove(); }, 800);
}

function upgrade() {
    if (score >= upgradeCost) {
        score -= upgradeCost;
        tapValue += 1;
        upgradeCost = upgradeCost * 2;
        localStorage.setItem('myScore', score);
        localStorage.setItem('tapValue', tapValue);
        localStorage.setItem('upgradeCost', upgradeCost);
        document.getElementById('coin').innerText = score;
        checkLevel();
        updateUpgradeButtonText();
        const btn = document.getElementById('upgrade-btn');
        btn.style.background = "linear-gradient(135deg, #4CAF50, #81C784)";
        setTimeout(() => { btn.style.background = ""; }, 500);
    } else {
        const btn = document.getElementById('upgrade-btn');
        btn.style.animation = "shake 0.5s";
        setTimeout(() => { btn.style.animation = ""; }, 500);
        alert("Sizga yana " + (upgradeCost - score) + " coin kerak!");
    }
}

function updateUpgradeButtonText() {
    const btn = document.getElementById('upgrade-btn');
    if (btn) {
        btn.innerText = "UPGRADE 🚀 (" + upgradeCost + ")";
    }
}
function checkLevel() {
    const coinImg = document.getElementById('coin-img');
    if (!coinImg) return;

    if (score >= 10000000) { 
        coinImg.src = 'coin4.png';
    } else if (score >= 1000000) { 
        coinImg.src = 'coin3.png';
    } else if (score >= 20000) { 
        coinImg.src = 'coin2.png';
    } else {
        coinImg.src = 'coin.png';
    }
}

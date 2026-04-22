// 1. Ma'lumotlarni xotiradan yuklash
let score = localStorage.getItem('myScore') ? parseInt(localStorage.getItem('myScore')) : 0;
let tapValue = localStorage.getItem('tapValue') ? parseInt(localStorage.getItem('tapValue')) : 1;
let upgradeCost = localStorage.getItem('upgradeCost') ? parseInt(localStorage.getItem('upgradeCost')) : 100;

// Sahifa yuklanganda ekranni yangilash
document.getElementById('coin').innerText = score;
updateUpgradeButtonText();

function tap(event) {
    score += tapValue;
    document.getElementById('coin').innerText = score;
    localStorage.setItem('myScore', score);
    createScoreEffect(event);
}

function createScoreEffect(event) {
    const effect = document.createElement('div');
    effect.innerText = '+' + tapValue;
    effect.className = 'score-animation';

    let x, y;
    if (event.touches && event.touches.length > 0) {
        x = event.touches[0].clientX;
        y = event.touches[0].clientY;
    } else {
        x = event.clientX;
        y = event.clientY;
    }

    effect.style.left = x + 'px';
    effect.style.top = y + 'px';
    document.body.appendChild(effect);

    setTimeout(() => { effect.remove(); }, 800);
}

function upgrade() {
    if (score >= upgradeCost) {
        score -= upgradeCost; // Ballni ayirish
        tapValue += 1;        // Kuchni oshirish
        
        // Narxni oshirish (masalan, 2 barobarga)
      function upgrade() {
    if (score >= upgradeCost) {
        score -= upgradeCost;
        tapValue += 1;
        upgradeCost = upgradeCost * 2;
        
        localStorage.setItem('myScore', score);
        localStorage.setItem('tapValue', tapValue);
        localStorage.setItem('upgradeCost', upgradeCost);
        
        document.getElementById('coin').innerText = score;
        updateUpgradeButtonText();

        // Tugmani yashil qilish
        const btn = document.getElementById('upgrade-btn');
        btn.style.background = "linear-gradient(135deg, #4CAF50, #81C784)";
        setTimeout(() => {
            btn.style.background = "linear-gradient(135deg, #6e8efb, #a777e3)";
        }, 500);

    } else {
        // Siltash effekti
        const btn = document.getElementById('upgrade-btn');
        btn.style.animation = "shake 0.5s";
        setTimeout(() => btn.style.animation = "", 500);
        alert("Mablag' yetarli emas! Sizga yana " + (upgradeCost - score) + " coin kerak.");
    }
}

function updateUpgradeButtonText() {
    const btn = document.getElementById('upgrade-btn');
    if (btn) {
        btn.innerText = "UPGRADE 🚀 (" + upgradeCost + ")";
    }
}
